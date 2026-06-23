"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";

export async function getNotes() {
  const session = await auth();

  if (!session?.user?.email) {
    return [];
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (!user) {
    return [];
  }

  return await prisma.note.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function createNote(
  title: string,
  content: string
) {
  const session = await auth();

  if (!session?.user?.email) {
    throw new Error("Unauthorized");
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
    include: {
      folders: true,
    },
  });

  if (!user) {
    throw new Error(
      "Please logout and login again"
    );
  }

  let folder = user.folders[0];

  if (!folder) {
    folder = await prisma.folder.create({
      data: {
        name: "My Notes",
        userId: user.id,
      },
    });
  }

  const note = await prisma.note.create({
    data: {
      title,
      content,
      userId: user.id,
      folderId: folder.id,
    },
  });

  revalidatePath("/dashboard");

  return note;
}