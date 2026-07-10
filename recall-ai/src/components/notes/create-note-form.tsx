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
  const [title, setTitle] =
    useState("");

  const [content, setContent] =
    useState("");

  const [folderId, setFolderId] =
    useState(folders[0]?.id ?? "");

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
      className="mb-8 rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-xl"
    >
      <h2 className="mb-6 text-2xl font-bold text-white">
        📝 Create New Note
      </h2>

      <input
        placeholder="Note title..."
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
        className="mb-4 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-emerald-400/40 focus:ring-2 focus:ring-emerald-500/20"
      />

      <textarea
        rows={6}
        placeholder="Write your note here..."
        value={content}
        onChange={(e) =>
          setContent(e.target.value)
        }
        className="mb-4 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-emerald-400/40 focus:ring-2 focus:ring-emerald-500/20"
      />

      <select
        value={folderId}
        onChange={(e) =>
          setFolderId(e.target.value)
        }
        className="mb-5 w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-emerald-400/40 focus:ring-2 focus:ring-emerald-500/20"
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
        className="rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-emerald-600 hover:to-green-700"
      >
        🚀 Create Note
      </button>
    </form>
  );
}