import { PutObjectCommand } from "@aws-sdk/client-s3";
import s3Client, { spacesBucketName } from "./s3bucket";
import { deleteFromS3 } from "./deleteFromS3";
import path from "path";
import crypto from "crypto";

export const getImageUrl = (image) => {
    if (!image) return 'https://placehold.co/600x400?text=No+Image';
    if (image.startsWith('http')) return image;
    return `https://desirediv-storage.blr1.digitaloceanspaces.com/${image}`;
};

export const getVideoUrl = (video) => {
    if (!video) return null;
    if (video.startsWith('http')) return video;
    return `https://desirediv-storage.blr1.digitaloceanspaces.com/${video}`;
};

export const getFileType = (file) => {
    if (file.type.startsWith('image/')) return 'image';
    if (file.type.startsWith('video/')) return 'video';
    return 'file';
};

export const uploadToS3 = async (file, folder = process.env.UPLOAD_FOLDER || 'chioary') => {
    try {
        const fileBuffer = Buffer.from(await file.arrayBuffer());
        const fileExtension = path.extname(file.name);
        const randomName = crypto.randomBytes(16).toString("hex");
        const fileName = `${folder}/${randomName}${fileExtension}`;
        const fileType = getFileType(file);
        const contentType = file.type;

        await s3Client.send(
            new PutObjectCommand({
                Bucket: spacesBucketName,
                Key: fileName,
                Body: fileBuffer,
                ACL: "public-read",
                ContentType: contentType,
            })
        );

        return {
            path: fileName,
            url: `https://${spacesBucketName}.blr1.digitaloceanspaces.com/${fileName}`,
            fileType,
            contentType
        };
    } catch (error) {
        console.error("S3 upload error:", error);
        throw error;
    }
};

export const updateFile = async (oldFilePath, newFile, folder = process.env.UPLOAD_FOLDER || 'chioary') => {
    try {
        // Delete the old file if it exists
        if (oldFilePath) {
            await deleteFromS3(oldFilePath);
        }

        // Upload the new file
        if (newFile) {
            return await uploadToS3(newFile, folder);
        }

        return null;
    } catch (error) {
        console.error("File update error:", error);
        throw error;
    }
};

// Alias for backward compatibility
export const updateImage = updateFile;
