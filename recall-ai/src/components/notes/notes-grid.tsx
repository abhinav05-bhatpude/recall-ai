import { NoteCard } from "./note-card";

interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
}

interface NotesGridProps {
  notes: Note[];
}

export function NotesGrid({
  notes,
}: NotesGridProps) {
  if (notes.length === 0) {
    return (
      <div className="rounded-lg border p-6 text-center">
        <h2 className="text-lg font-semibold">
          No Notes Yet
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Create your first note to get
          started.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="mb-4 text-xl font-semibold">
        Notes
      </h2>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {notes.map((note) => (
          <NoteCard
            key={note.id}
            title={note.title}
            content={note.content}
            createdAt={note.createdAt}
          />
        ))}
      </div>
    </div>
  );
}