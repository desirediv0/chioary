import { NextResponse } from "next/server";
import { prisma } from "../../../../../../prisma/client";

// This prevents static generation for this route
export const dynamic = 'force-dynamic';

export async function GET(request, { params }) {
    try {
        const { id } = params;

        const event = await prisma.event.findUnique({
            where: {
                id,
            },
            include: {
                images: true,
            },
        });

        if (!event) {
            return NextResponse.json(
                { error: "Event not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(event);
    } catch (error) {
        console.error("Error fetching event by ID:", error);
        return NextResponse.json(
            { error: "Failed to fetch event" },
            { status: 500 }
        );
    }
}
