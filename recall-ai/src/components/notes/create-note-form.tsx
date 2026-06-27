"use client";

import { useState } from "react";
import { createNote } from "@/actions/note-actions";

interface Folder {
  id: string;
  name: string;
}

interface CreateNoteFormProps {
  folders: Folder[];
}

export function CreateNoteForm({
  folders,
}: CreateNoteFormProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [folderId, setFolderId] = useState(
    folders[0]?.id ?? ""
  );

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    await createNote(
      title,
      content,
      folderId
    );

    setTitle("");
    setContent("");

    location.reload();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 rounded-lg border p-4"
    >
      <h2 className="mb-4 text-lg font-semibold">
        Create Note
      </h2>

      <input
        className="mb-3 w-full rounded border p-2"
        placeholder="Title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
      />

      <textarea
        className="mb-3 w-full rounded border p-2"
        placeholder="Content"
        value={content}
        onChange={(e) =>
          setContent(e.target.value)
        }
      />

      <select
        className="mb-3 w-full rounded border p-2"
        value={folderId}
        onChange={(e) =>
          setFolderId(e.target.value)
        }
      >
        {folders.map((folder) => (
          <option
            key={folder.id}
            value={folder.id}
          >
            {folder.name}
          </option>
        ))}
      </select>

      <button
        type="submit"
        className="rounded bg-black px-4 py-2 text-white"
      >
        Create Note
      </button>
    </form>
  );
}