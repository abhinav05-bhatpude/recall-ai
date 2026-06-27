"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";

export async function getNotes(
  folderId?: string
) {
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
      ...(folderId && {
        folderId,
      }),
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function createNote(
  title: string,
  content: string,
  folderId: string
) {
  const session = await auth();

  if (!session?.user?.email) {
    throw new Error("Unauthorized");
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (!user) {
    throw new Error(
      "Please logout and login again"
    );
  }

  const note = await prisma.note.create({
    data: {
      title,
      content,
      userId: user.id,
      folderId,
    },
  });

  revalidatePath("/dashboard");

  return note;
}

export async function updateNote(
  noteId: string,
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
  });

  if (!user) {
    throw new Error("User not found");
  }

  const note = await prisma.note.findUnique({
    where: {
      id: noteId,
    },
  });

  if (!note) {
    throw new Error("Note not found");
  }

  if (note.userId !== user.id) {
    throw new Error("Forbidden");
  }

  const updatedNote =
    await prisma.note.update({
      where: {
        id: noteId,
      },
      data: {
        title,
        content,
      },
    });

  revalidatePath("/dashboard");

  return updatedNote;
}

export async function deleteNote(
  noteId: string
) {
  const session = await auth();

  if (!session?.user?.email) {
    throw new Error("Unauthorized");
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const note = await prisma.note.findUnique({
    where: {
      id: noteId,
    },
  });

  if (!note) {
    throw new Error("Note not found");
  }

  if (note.userId !== user.id) {
    throw new Error("Forbidden");
  }

  await prisma.note.delete({
    where: {
      id: noteId,
    },
  });

  revalidatePath("/dashboard");
}

export async function createFolder(
  name: string
) {
  const session = await auth();

  if (!session?.user?.email) {
    throw new Error("Unauthorized");
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const folder =
    await prisma.folder.create({
      data: {
        name,
        userId: user.id,
      },
    });

  revalidatePath("/dashboard");

  return folder;
}

export async function getFolders() {
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

  return await prisma.folder.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "asc",
    },
  });
}