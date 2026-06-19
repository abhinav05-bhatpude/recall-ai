interface NoteCardProps {
  title: string;
  content: string;
}

export function NoteCard({
  title,
  content,
}: NoteCardProps) {
  return (
    <div className="rounded-lg border p-4 shadow-sm">
      <h3 className="mb-2 font-semibold">
        {title}
      </h3>

      <p className="text-sm text-gray-600">
        {content}
      </p>
    </div>
  );
}