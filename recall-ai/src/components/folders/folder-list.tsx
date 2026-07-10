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
    );

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
    <div className="mb-8 rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
      <h2 className="mb-6 text-2xl font-bold text-white">
        📁 Folders
      </h2>

      <button
        onClick={() =>
          router.push("/dashboard")
        }
        className="mb-4 block w-full rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-4 text-left font-semibold text-emerald-300 transition-all duration-300 hover:bg-emerald-500/20 hover:scale-[1.02]"
      >
        📂 All Notes
      </button>

      <div className="space-y-3">
        {folders.map((folder) => (
          <div
            key={folder.id}
            className="flex items-center gap-3"
          >
            <button
              onClick={() =>
                router.push(
                  `/dashboard?folder=${folder.id}`
                )
              }
              className="flex-1 rounded-2xl border border-white/10 bg-white/5 p-4 text-left font-medium text-slate-200 transition-all duration-300 hover:border-emerald-400/30 hover:bg-white/10 hover:text-white"
            >
              📁 {folder.name}
            </button>

            <button
              onClick={() =>
                handleDelete(folder.id)
              }
              className="rounded-2xl border border-red-400/20 bg-red-500/10 px-4 py-4 text-red-300 transition-all duration-300 hover:bg-red-500/20"
            >
              🗑
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}