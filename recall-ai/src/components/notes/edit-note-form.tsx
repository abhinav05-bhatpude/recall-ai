"use client";

import { useState } from "react";

interface EditNoteFormProps {
  id: string;
  initialTitle: string;
  initialContent: string;
}

export function EditNoteForm({
  id,
  initialTitle,
  initialContent,
}: EditNoteFormProps) {
  const [title, setTitle] =
    useState(initialTitle);

  const [content, setContent] =
    useState(initialContent);

  return (
    <form className="space-y-3 rounded-lg border p-4">
      <input
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
        placeholder="Title"
        className="w-full rounded border p-2"
      />

      <textarea
        value={content}
        onChange={(e) =>
          setContent(e.target.value)
        }
        placeholder="Content"
        rows={6}
        className="w-full rounded border p-2"
      />

      <button
        type="submit"
        className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Save Changes
      </button>
    </form>
  );
}