interface Folder {
  id: number;
  name: string;
}

interface FolderListProps {
  folders: Folder[];
}

export function FolderList({
  folders,
}: FolderListProps) {
  return (
    <div className="mb-8">
      <h2 className="mb-4 text-xl font-semibold">
        Folders
      </h2>

      <div className="space-y-2">
        {folders.map((folder) => (
          <div
            key={folder.id}
            className="rounded-lg border p-3 hover:bg-gray-50"
          >
            📁 {folder.name}
          </div>
        ))}
      </div>
    </div>
  );
}