"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export async function getCoverLetter(id) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  // This fetches the specific letter from your Neon database
  const coverLetter = await db.coverLetter.findUnique({
    where: {
      id: id,
      userId: userId,
    },
  });

  return coverLetter;
}