import { S3Client } from '@aws-sdk/client-s3';

const spacesConfig = {
    endpoint: process.env.NEXT_PUBLIC_SPACES_ENDPOINT,
    region: process.env.NEXT_PUBLIC_SPACES_REGION,
    credentials: {
        accessKeyId: process.env.NEXT_PUBLIC_SPACES_ACCESS_KEY,
        secretAccessKey: process.env.NEXT_PUBLIC_SPACES_SECRET_KEY
    },
    forcePathStyle: false
};

if (!process.env.NEXT_PUBLIC_SPACES_BUCKET) {
    throw new Error('SPACES_BUCKET environment variable is not defined');
}

export const spacesBucketName = process.env.NEXT_PUBLIC_SPACES_BUCKET;

const s3Client = new S3Client(spacesConfig);
export default s3Client;