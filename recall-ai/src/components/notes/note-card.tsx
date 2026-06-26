"use client";

import { useState } from "react";

import { EditNoteForm } from "./edit-note-form";

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
  const [editing, setEditing] =
    useState(false);

  if (editing) {
    return (
      <EditNoteForm
        id={id}
        initialTitle={title}
        initialContent={content}
        onCancel={() => setEditing(false)}
      />
    );
  }

  return (
    <div className="rounded-lg border p-4 shadow-sm">
      <div className="mb-2 flex items-center justify-between">
        <h3 className="font-semibold">
          {title}
        </h3>

        <button
          onClick={() => setEditing(true)}
          className="text-sm text-blue-600 hover:text-blue-800"
        >
          Edit
        </button>
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