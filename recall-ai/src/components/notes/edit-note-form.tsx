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
      className="space-y-4 rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-xl"
    >
      <h2 className="text-2xl font-bold text-white">
        ✏️ Edit Note
      </h2>

      <input
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
        placeholder="Note title..."
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-emerald-400/40 focus:ring-2 focus:ring-emerald-500/20"
      />

      <textarea
        rows={6}
        value={content}
        onChange={(e) =>
          setContent(e.target.value)
        }
        placeholder="Update your note..."
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-emerald-400/40 focus:ring-2 focus:ring-emerald-500/20"
      />

      <div className="flex gap-3">
        <button
          type="submit"
          disabled={loading}
          className="rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-emerald-600 hover:to-green-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading
            ? "⏳ Saving..."
            : "💾 Save Changes"}
        </button>

        <button
          type="button"
          onClick={onCancel}
          disabled={loading}
          className="rounded-2xl border border-white/10 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/20 disabled:opacity-50"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}