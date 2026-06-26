"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { EditNoteForm } from "./edit-note-form";
import { deleteNote } from "@/actions/note-actions";

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
  const router = useRouter();

  const [editing, setEditing] =
    useState(false);

  const [deleting, setDeleting] =
    useState(false);

  async function handleDelete() {
    const confirmed = window.confirm(
      "Are you sure you want to delete this note?"
    );

    if (!confirmed) {
      return;
    }

    try {
      setDeleting(true);

      await deleteNote(id);

      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Failed to delete note.");
    } finally {
      setDeleting(false);
    }
  }

  if (editing) {
    return (
      <EditNoteForm
        id={id}
        initialTitle={title}
        initialContent={content}
        onCancel={() =>
          setEditing(false)
        }
      />
    );
  }

  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-2 flex items-center justify-between">
        <h3 className="font-semibold">
          {title}
        </h3>

        <div className="flex gap-2">
          <button
            onClick={() =>
              setEditing(true)
            }
            disabled={deleting}
            className="rounded px-2 py-1 text-sm text-blue-600 transition hover:bg-blue-50 hover:text-blue-800 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Edit
          </button>

          <button
            onClick={handleDelete}
            disabled={deleting}
            className="rounded px-2 py-1 text-sm text-red-600 transition hover:bg-red-50 hover:text-red-800 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {deleting
              ? "Deleting..."
              : "Delete"}
          </button>
        </div>
      </div>

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