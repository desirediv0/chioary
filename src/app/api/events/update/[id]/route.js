import { NextResponse } from "next/server";
import { prisma } from "../../../../../../prisma/client";
import { getServerSession } from "next-auth";
import { updateFile, uploadToS3 } from "../../../../../../utils/imageHelpers";
import { deleteFromS3 } from "../../../../../../utils/deleteFromS3";
import slugify from 'slugify';
import { authOptions } from "@/app/api/(user)/auth/[...nextauth]/authOptions";

export async function PUT(request, { params }) {
    // Track newly uploaded files for cleanup in case of error
    const uploadedFiles = [];

    try {
        // Check authentication
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { id } = params;
        const formData = await request.formData();

        // Fetch the original event to get the old thumbnail
        const existingEvent = await prisma.event.findUnique({
            where: { id },
        });

        if (!existingEvent) {
            return NextResponse.json(
                { error: "Event not found" },
                { status: 404 }
            );
        }

        const title = formData.get("title");
        let slug = formData.get("slug");
        if (!slug && title) {
            slug = slugify(title, { lower: true, strict: true });
        }

        const description = formData.get("description");
        const shortDescription = formData.get("shortDescription");
        const startDate = formData.get("startDate") ? new Date(formData.get("startDate")) : existingEvent.startDate;
        const endDate = formData.get("endDate") ? new Date(formData.get("endDate")) : existingEvent.endDate;
        const location = formData.get("location");
        const videoUrl = formData.get("videoUrl") || null;

        const thumbnailFile = formData.get("thumbnail");
        let thumbnail = existingEvent.thumbnail;

        // Use a transaction to ensure database consistency
        const updatedEvent = await prisma.$transaction(async (prismaClient) => {
            // Handle thumbnail update if a new one is provided
            if (thumbnailFile && thumbnailFile.size > 0) {
                const result = await updateFile(existingEvent.thumbnail, thumbnailFile);
                thumbnail = result.path;
                if (result.path !== existingEvent.thumbnail) {
                    uploadedFiles.push(result.path);
                }
            }

            // Handle image deletions
            const deleteImageIds = formData.getAll("deleteImages");
            if (deleteImageIds.length > 0) {
                // First get the images to delete for S3 cleanup
                const imagesToDelete = await prismaClient.images.findMany({
                    where: {
                        id: { in: deleteImageIds },
                        eventId: id,
                    },
                });

                // Delete from S3
                for (const img of imagesToDelete) {
                    await deleteFromS3(img.image);
                }

                // Delete from database
                await prismaClient.images.deleteMany({
                    where: {
                        id: { in: deleteImageIds },
                        eventId: id,
                    },
                });
            }

            // Update the event
            const updated = await prismaClient.event.update({
                where: { id },
                data: {
                    title,
                    slug,
                    description,
                    shortDescription,
                    startDate,
                    endDate,
                    location,
                    thumbnail,
                    videoUrl,
                },
            });

            // Handle new images
            const imageFiles = formData.getAll("newImages");
            const imageData = [];

            for (const imageFile of imageFiles) {
                if (imageFile && imageFile.size > 0) {
                    const result = await uploadToS3(imageFile);
                    uploadedFiles.push(result.path);
                    imageData.push({
                        eventId: id,
                        image: result.path,
                    });
                }
            }

            // Save new images to database
            if (imageData.length > 0) {
                await prismaClient.images.createMany({
                    data: imageData,
                });
            }

            return updated;
        });

        return NextResponse.json({
            success: true,
            event: updatedEvent,
        });
    } catch (error) {
        console.error("Event update error:", error);

        // Clean up any newly uploaded files if there was an error
        for (const file of uploadedFiles) {
            try {
                await deleteFromS3(file);
            } catch (cleanupError) {
                console.error("Failed to delete file during error cleanup:", cleanupError);
            }
        }

        return NextResponse.json(
            { error: "Failed to update event" },
            { status: 500 }
        );
    }
}
