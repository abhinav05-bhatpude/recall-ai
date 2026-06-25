interface NoteCardProps {
  title: string;
  content: string;
  createdAt?: Date;
}

export function NoteCard({
  title,
  content,
  createdAt,
}: NoteCardProps) {
  return (
    <div className="rounded-lg border p-4 shadow-sm">
      <h3 className="mb-2 font-semibold">
        {title}
      </h3>

      <p className="mb-3 text-sm text-gray-600">
        {content}
      </p>

      {createdAt && (
        <p className="text-xs text-gray-400">
          {new Date(
            createdAt
          ).toLocaleDateString()}
        </p>
      )}
    </div>
  );
}