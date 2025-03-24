import { NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/client";
import { getServerSession } from "next-auth";
import { uploadToS3 } from "../../../../../utils/imageHelpers";
import { deleteFromS3 } from "../../../../../utils/deleteFromS3";
import slugify from 'slugify';
import { authOptions } from "@/app/api/(user)/auth/[...nextauth]/authOptions";

export async function POST(request) {
    // Arrays to track uploaded files for cleanup in case of error
    const uploadedFiles = [];

    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const formData = await request.formData();

        const title = formData.get("title");
        let slug = formData.get("slug");
        if (!slug && title) {
            slug = slugify(title, { lower: true, strict: true });
        }

        const description = formData.get("description");
        const shortDescription = formData.get("shortDescription");
        const startDate = formData.get("startDate") ? new Date(formData.get("startDate")) : null;
        const endDate = formData.get("endDate") ? new Date(formData.get("endDate")) : null;
        const location = formData.get("location");
        const videoUrl = formData.get("videoUrl") || null;


        const thumbnailFile = formData.get("thumbnail");
        let thumbnail = null;

        if (thumbnailFile) {
            const result = await uploadToS3(thumbnailFile);
            thumbnail = result.path;
            uploadedFiles.push(thumbnail);
        }

        // Create the event in a transaction to ensure we can roll back
        const event = await prisma.$transaction(async (prisma) => {
            // Create the main event
            const newEvent = await prisma.event.create({
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

            // Handle images
            const imageFiles = formData.getAll("images");
            const imageData = [];

            for (const imageFile of imageFiles) {
                if (imageFile && imageFile.size > 0) {
                    const result = await uploadToS3(imageFile);
                    uploadedFiles.push(result.path);
                    imageData.push({
                        eventId: newEvent.id,
                        image: result.path,
                    });
                }
            }

            // Save images to database
            if (imageData.length > 0) {
                await prisma.images.createMany({
                    data: imageData,
                });
            }

            return newEvent;
        });

        return NextResponse.json({
            success: true,
            event,
        });
    } catch (error) {
        console.error("Event creation error:", error);

        // Clean up any uploaded files if there was an error
        for (const file of uploadedFiles) {
            try {
                await deleteFromS3(file);
            } catch (cleanupError) {
                console.error("Failed to delete file during error cleanup:", cleanupError);
            }
        }

        return NextResponse.json(
            { error: "Failed to create event" },
            { status: 500 }
        );
    }
}
