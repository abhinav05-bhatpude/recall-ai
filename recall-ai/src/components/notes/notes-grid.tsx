import { NoteCard } from "./note-card";

interface Note {
  id: number;
  title: string;
  content: string;
}

interface NotesGridProps {
  notes: Note[];
}

export function NotesGrid({
  notes,
}: NotesGridProps) {
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
          />
        ))}
      </div>
    </div>
  );
}