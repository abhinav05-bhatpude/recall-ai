"use client";

import { useRouter } from "next/navigation";

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
          <button
            key={folder.id}
            onClick={() =>
              router.push(
                `/dashboard?folder=${folder.id}`
              )
            }
            className="block w-full rounded-lg border p-3 text-left hover:bg-gray-50"
          >
            📁 {folder.name}
          </button>
        ))}
      </div>
    </div>
  );
}