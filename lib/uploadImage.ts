import { ID, storage } from "@/appwrite";

const uploadImage = async (file: File) => {
  if (!file) return;
  const bucketId: string = process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID!;

  const fileUploaded = await storage.createFile(bucketId, ID.unique(), file);

  return fileUploaded;
};

export default uploadImage;
