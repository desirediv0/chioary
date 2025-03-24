import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "../../../../../../prisma/client";
import { authOptions } from "@/app/api/(user)/auth/[...nextauth]/authOptions";
import { deleteFromS3 } from "../../../../../../utils/deleteFromS3";

// This prevents static generation for this route
export const dynamic = 'force-dynamic';

export async function DELETE(request, { params }) {
    try {
        // Check authentication
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { id } = params;
        if (!id) {
            return NextResponse.json({ error: "Missing event ID" }, { status: 400 });
        }

        console.log(`Deleting event with ID: ${id}`);

        // Fetch the event to get the thumbnail URL
        const event = await prisma.event.findUnique({
            where: { id },
            include: {
                images: true
            }
        });

        if (!event) {
            return NextResponse.json({ error: "Event not found" }, { status: 404 });
        }

        console.log(`Found event: ${event.title} with ${event.images?.length || 0} images`);

        // Create an array of all files to delete
        const filesToDelete = [];

        // Add thumbnail if it exists
        if (event.thumbnail) {
            filesToDelete.push(event.thumbnail);
            console.log(`Adding thumbnail to delete: ${event.thumbnail}`);
        }

        // Add all image files
        if (event.images && event.images.length > 0) {
            for (const image of event.images) {
                if (image.image) {
                    filesToDelete.push(image.image);
                    console.log(`Adding image to delete: ${image.image}`);
                }
            }
        }

        // Delete all files from S3 one by one for better error handling
        console.log(`Deleting ${filesToDelete.length} files from storage`);
        for (const file of filesToDelete) {
            try {
                await deleteFromS3(file);
                console.log(`Successfully deleted file: ${file}`);
            } catch (error) {
                console.error(`Error deleting file ${file}:`, error);
            }
        }

        await prisma.$transaction(async (tx) => {
            // Delete all images
            if (event.images?.length > 0) {
                await tx.images.deleteMany({
                    where: { eventId: id }
                });
            }

            // Delete the event
            await tx.event.delete({
                where: { id }
            });
        });

        console.log(`Successfully deleted event ${id} and all related data`);
        return NextResponse.json({
            success: true,
            message: "Event and related media deleted successfully"
        });
    } catch (error) {
        console.error("Event deletion error:", error);
        return NextResponse.json(
            { error: "Failed to delete event: " + error.message },
            { status: 500 }
        );
    }
}
