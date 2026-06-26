"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { updateNote } from "@/actions/note-actions";

interface EditNoteFormProps {
  id: string;
  initialTitle: string;
  initialContent: string;
  onCancel: () => void;
}

export function EditNoteForm({
  id,
  initialTitle,
  initialContent,
  onCancel,
}: EditNoteFormProps) {
  const router = useRouter();

  const [title, setTitle] =
    useState(initialTitle);

  const [content, setContent] =
    useState(initialContent);

  const [loading, setLoading] =
    useState(false);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);

    try {
      await updateNote(
        id,
        title,
        content
      );

      router.refresh();

      onCancel();
    } catch (error) {
      console.error(error);
      alert("Failed to update note");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-3 rounded-lg border p-4"
    >
      <input
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
        className="w-full rounded border p-2"
      />

      <textarea
        rows={6}
        value={content}
        onChange={(e) =>
          setContent(e.target.value)
        }
        className="w-full rounded border p-2"
      />

      <div className="flex gap-2">
        <button
          type="submit"
          disabled={loading}
          className="rounded bg-blue-600 px-4 py-2 text-white disabled:opacity-50"
        >
          {loading
            ? "Saving..."
            : "Save"}
        </button>

        <button
          type="button"
          onClick={onCancel}
          disabled={loading}
          className="rounded border px-4 py-2"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}