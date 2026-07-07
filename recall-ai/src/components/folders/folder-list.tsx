"use client";

import { useRouter } from "next/navigation";
import { deleteFolder } from "@/actions/note-actions";

interface Folder {
  id: string;
  name: string;
}

interface FolderListProps {
  folders: Folder[];
}

export function FolderList({
  folders,
}: FolderListProps) {
  const router = useRouter();

  async function handleDelete(
    folderId: string
  ) {
    const confirmed = window.confirm(
  "Are you sure you want to delete this folder?"
)

    if (!confirmed) return;

    try {
      await deleteFolder(folderId);

      router.refresh();
    } catch (error) {
  console.error(error);

  if (
    error instanceof Error &&
    error.message.includes("contains notes")
  ) {
    alert(
      "📁 This folder contains notes.\n\nDelete or move the notes first."
    );
  } else {
    alert(
      "❌ Failed to delete folder."
    );
  }
}
  }

  return (
    <div className="mb-8">
      <h2 className="mb-4 text-xl font-semibold">
        Folders
      </h2>

      <button
        onClick={() =>
          router.push("/dashboard")
        }
        className="mb-2 block w-full rounded-lg border p-3 text-left hover:bg-gray-50"
      >
        📂 All Notes
      </button>

      <div className="space-y-2">
        {folders.map((folder) => (
          <div
            key={folder.id}
            className="flex items-center gap-2"
          >
            <button
              onClick={() =>
                router.push(
                  `/dashboard?folder=${folder.id}`
                )
              }
              className="flex-1 rounded-lg border p-3 text-left hover:bg-gray-50"
            >
              📁 {folder.name}
            </button>

            <button
              onClick={() =>
                handleDelete(folder.id)
              }
              className="rounded-lg bg-red-50 px-3 py-3 text-red-600 hover:bg-red-100"
            >
              🗑
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}