"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { createFolder } from "@/actions/note-actions";

export function CreateFolderForm() {
  const router = useRouter();

  const [name, setName] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    if (!name.trim()) {
      return;
    }

    try {
      setLoading(true);

      await createFolder(name);

      setName("");

      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Failed to create folder");
    } finally {
      setLoading(false);
    }
  }

  return (
  <form
    onSubmit={handleSubmit}
    className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
  >
    <h2 className="mb-4 text-xl font-semibold">
      📁 Create Folder
    </h2>

    <div className="flex gap-3">
      <input
        type="text"
        placeholder="New Folder"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
        className="flex-1 rounded-xl border border-slate-300 p-3 outline-none transition focus:border-emerald-500"
      />

      <button
        type="submit"
        disabled={loading}
        className="rounded-xl bg-emerald-600 px-6 py-3 text-white transition hover:bg-emerald-700 disabled:opacity-50"
      >
        {loading
          ? "Creating..."
          : "Create"}
      </button>
    </div>
  </form>
);
}