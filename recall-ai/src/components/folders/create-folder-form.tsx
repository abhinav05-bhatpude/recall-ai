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
      className="mb-6 flex gap-2"
    >
      <input
        type="text"
        placeholder="New Folder"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
        className="flex-1 rounded border p-2"
      />

      <button
        type="submit"
        disabled={loading}
        className="rounded bg-green-600 px-4 py-2 text-white disabled:opacity-50"
      >
        {loading
          ? "Creating..."
          : "Create"}
      </button>
    </form>
  );
}