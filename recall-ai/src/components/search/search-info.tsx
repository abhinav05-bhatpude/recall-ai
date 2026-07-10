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
    <div className="mb-6 rounded-2xl border border-white/10 bg-white/10 p-5 shadow-xl backdrop-blur-xl">
      <div className="mb-3 flex items-center gap-2">
        <span className="text-xl">🔎</span>

        <h3 className="text-lg font-semibold text-white">
          Active Filters
        </h3>
      </div>

      <div className="flex flex-wrap gap-3">
        {search && (
          <span className="rounded-full border border-emerald-400/20 bg-emerald-500/20 px-4 py-2 text-sm font-medium text-emerald-300">
            🔍 {search}
          </span>
        )}

        {folderName && (
          <span className="rounded-full border border-blue-400/20 bg-blue-500/20 px-4 py-2 text-sm font-medium text-blue-300">
            📁 {folderName}
          </span>
        )}
      </div>
    </div>
  );
}