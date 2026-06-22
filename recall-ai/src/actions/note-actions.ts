"use server";

import { prisma } from "@/lib/prisma";

export async function getNotes() {
  return await prisma.note.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function createNote(
  title: string,
  content: string,
  userId: string,
  folderId: string
) {
  return await prisma.note.create({
    data: {
      title,
      content,
      userId,
      folderId,
    },
  });
}