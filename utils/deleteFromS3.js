import { DeleteObjectCommand } from "@aws-sdk/client-s3";
import s3Client, { spacesBucketName } from "./s3bucket";

export const deleteFromS3 = async (fileUrl) => {
    try {
        if (!fileUrl) {
            console.log("No file URL provided for deletion");
            return;
        }

        let Key;

        // Handle full URLs
        if (fileUrl.startsWith('http')) {
            // Parse URL and extract the path without query parameters
            try {
                const parsedUrl = new URL(fileUrl);
                const pathname = parsedUrl.pathname;

                // Remove query parameters if present
                const cleanPath = pathname.split('?')[0];

                // Remove the leading slash
                Key = cleanPath.slice(1);

                // Check if the URL contains the bucket name and region
                // Support multiple region formats (blr1, nyc1, etc.)
                const regionPattern = /\.[a-z0-9]+\.digitaloceanspaces\.com/;
                const bucketWithRegionMatch = fileUrl.match(new RegExp(`${spacesBucketName}${regionPattern}`));

                if (bucketWithRegionMatch) {
                    // Extract just the filename part after the bucket info
                    const parts = fileUrl.split(bucketWithRegionMatch[0]);
                    if (parts.length > 1) {
                        Key = parts[1].startsWith('/') ? parts[1].slice(1) : parts[1];
                    }
                }
            } catch (urlError) {
                console.error("Error parsing URL:", urlError, fileUrl);
                // Try a simple path extraction as fallback
                const urlParts = fileUrl.split('/');
                Key = urlParts.slice(3).join('/');
            }
        } else {
            // Handle relative paths
            Key = fileUrl.startsWith('/') ? fileUrl.slice(1) : fileUrl;
        }

        // Skip deletion if key is empty or invalid
        if (!Key || Key === '') {
            console.log("Invalid key derived from URL:", fileUrl);
            return;
        }

        console.log(`Deleting S3 file: ${Key} from bucket ${spacesBucketName}`);

        const command = new DeleteObjectCommand({
            Bucket: spacesBucketName,
            Key,
        });

        await s3Client.send(command);
        console.log(`Successfully deleted file: ${Key}`);
    } catch (error) {
        console.error(`S3 deletion error for file ${fileUrl}:`, error);
        throw error;
    }
};

export const getFileUrl = (filename) => {
    if (!filename) return null;
    return `https://${spacesBucketName}.${process.env.SPACES_REGION || 'blr1'}.digitaloceanspaces.com/${filename}`;
};