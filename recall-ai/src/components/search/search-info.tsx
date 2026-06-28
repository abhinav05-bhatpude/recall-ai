interface SearchInfoProps {
  search?: string;
  folderName?: string;
}

export function SearchInfo({
  search,
  folderName,
}: SearchInfoProps) {
  if (!search && !folderName) {
    return null;
  }

  return (
    <div className="mb-4 rounded-lg border bg-gray-50 p-3 text-sm">
      <p className="font-semibold">
        Active Filters
      </p>

      {search && (
        <p>
          🔍 Search: <strong>{search}</strong>
        </p>
      )}

      {folderName && (
        <p>
          📁 Folder: <strong>{folderName}</strong>
        </p>
      )}
    </div>
  );
}