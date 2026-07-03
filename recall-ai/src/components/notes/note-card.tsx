"use client";

interface NoteCardProps {
  id: string;
  title: string;
  content: string;
  createdAt?: Date;
}

export function NoteCard({
  id,
  title,
  content,
  createdAt,
}: NoteCardProps) {
  return (
    <div className="rounded-lg border p-4 shadow-sm">
      <div className="mb-2 flex items-center justify-between">
        <h3 className="font-semibold">
          {title}
        </h3>

        <button className="text-sm text-blue-600 hover:text-blue-800">
          ✏️ Edit
        </button>
      </div>

      <p className="mb-4 whitespace-pre-wrap text-sm text-gray-600">
        {content}
      </p>

      <div className="mb-4 flex flex-wrap gap-2">
        <button
          className="rounded-md border px-3 py-1 text-sm transition hover:bg-gray-100"
        >
          ✨ Summarize
        </button>

        <button
          className="rounded-md border px-3 py-1 text-sm transition hover:bg-gray-100"
        >
          📝 Key Points
        </button>

        <button
          className="rounded-md border px-3 py-1 text-sm transition hover:bg-gray-100"
        >
          📚 Study Notes
        </button>
      </div>

      {createdAt && (
        <p className="text-xs text-gray-400">
          {new Date(createdAt).toLocaleDateString()}
        </p>
      )}
    </div>
  );
}