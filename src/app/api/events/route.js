import { NextResponse } from "next/server";
import { prisma } from "../../../../prisma/client";

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const limit = searchParams.get("limit") ? parseInt(searchParams.get("limit")) : 10;
        const page = searchParams.get("page") ? parseInt(searchParams.get("page")) : 1;
        const skip = (page - 1) * limit;

        const events = await prisma.event.findMany({
            select: {
                id: true,
                title: true,
                slug: true,
                shortDescription: true,
                startDate: true,
                thumbnail: true,
            },
            orderBy: {
                startDate: "desc",
            },
            skip,
            take: limit,
        });

        const total = await prisma.event.count();

        return NextResponse.json({
            events,
            pagination: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        });
    } catch (error) {
        console.error("Error fetching events:", error);
        return NextResponse.json(
            { error: "Failed to fetch events" },
            { status: 500 }
        );
    }
}
