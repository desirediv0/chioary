import { NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/client";

export async function GET(request, { params }) {
    try {
        const { slug } = params;

        const event = await prisma.event.findUnique({
            where: {
                slug,
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
        console.error("Error fetching event:", error);
        return NextResponse.json(
            { error: "Failed to fetch event" },
            { status: 500 }
        );
    }
}
