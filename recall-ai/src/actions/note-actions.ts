"use server";

import { prisma } from "@/lib/prisma";

export async function getNotes() {
  return await prisma.note.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}