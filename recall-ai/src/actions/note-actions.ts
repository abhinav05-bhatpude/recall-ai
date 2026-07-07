"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";

export async function getNotes(
  folderId?: string,
  search?: string
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

      ...(search && {
        OR: [
          {
            title: {
              contains: search,
              mode: "insensitive",
            },
          },
          {
            content: {
              contains: search,
              mode: "insensitive",
            },
          },
        ],
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
export async function createResource(
  title: string,
  url: string,
  type: string,
  description?: string
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

  const resource =
    await prisma.resource.create({
      data: {
        title,
        url,
        type,
        description,
        userId: user.id,
      },
    });

  revalidatePath("/dashboard");

  return resource;
}

export async function getResources(
  search?: string
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

  return await prisma.resource.findMany({
    where: {
      userId: user.id,

      ...(search && {
        OR: [
          {
            title: {
              contains: search,
              mode: "insensitive",
            },
          },
          {
            description: {
              contains: search,
              mode: "insensitive",
            },
          },
          {
            type: {
              contains: search,
              mode: "insensitive",
            },
          },
        ],
      }),
    },

    orderBy: {
      createdAt: "desc",
    },
  });
  
}
export async function deleteResource(
  resourceId: string
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

  const resource =
    await prisma.resource.findUnique({
      where: {
        id: resourceId,
      },
    });

  if (!resource) {
    throw new Error("Resource not found");
  }

  if (resource.userId !== user.id) {
    throw new Error("Forbidden");
  }

  await prisma.resource.delete({
    where: {
      id: resourceId,
    },
  });

  revalidatePath("/dashboard");
}
export async function deleteFolder(
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
    throw new Error("User not found");
  }

  const folder =
    await prisma.folder.findUnique({
      where: {
        id: folderId,
      },
      include: {
        notes: true,
      },
    });

  if (!folder) {
    throw new Error("Folder not found");
  }

  if (folder.userId !== user.id) {
    throw new Error("Forbidden");
  }

  if (folder.notes.length > 0) {
    throw new Error(
      "This folder contains notes. Delete or move them first."
    );
  }

  await prisma.folder.delete({
    where: {
      id: folderId,
    },
  });

  revalidatePath("/dashboard");
}
