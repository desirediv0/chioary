import { NextResponse } from "next/server";
import { uploadToS3 } from "../../../../../utils/imageHelpers";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { spacesBucketName } from "../../../../../utils/s3bucket";

export async function POST(request) {
    try {
        // Check authentication
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const formData = await request.formData();
        const file = formData.get("file");

        if (!file) {
            return NextResponse.json(
                { error: "No file provided" },
                { status: 400 }
            );
        }

        const folderName = formData.get("folder") || process.env.UPLOAD_FOLDER || 'chioary';
        const fileName = await uploadToS3(file, folderName);
        const region = process.env.NEXT_PUBLIC_SPACES_REGION || 'blr1';

        return NextResponse.json({
            success: true,
            fileName,
            url: `https://${spacesBucketName}.${region}.digitaloceanspaces.com/${fileName}`,
        });
    } catch (error) {
        console.error("Upload error:", error);
        return NextResponse.json(
            { error: "Failed to upload image" },
            { status: 500 }
        );
    }
}
