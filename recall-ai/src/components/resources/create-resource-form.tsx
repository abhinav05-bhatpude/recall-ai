"use client";

import { useState } from "react";
import { createResource } from "@/actions/note-actions";

export function CreateResourceForm() {
  const [title, setTitle] =
    useState("");

  const [url, setUrl] =
    useState("");

  const [type, setType] =
    useState("Website");

  const [description, setDescription] =
    useState("");

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    await createResource(
      title,
      url,
      type,
      description
    );

    setTitle("");
    setUrl("");
    setDescription("");
    setType("Website");

    location.reload();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <h2 className="mb-6 text-2xl font-bold text-slate-800">
        📚 Save Resource
      </h2>

      <input
        placeholder="Resource Title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
        className="mb-4 w-full rounded-xl border p-3"
      />

      <input
        placeholder="https://..."
        value={url}
        onChange={(e) =>
          setUrl(e.target.value)
        }
        className="mb-4 w-full rounded-xl border p-3"
      />

      <select
        value={type}
        onChange={(e) =>
          setType(e.target.value)
        }
        className="mb-4 w-full rounded-xl border p-3"
      >
        <option>Website</option>
        <option>GitHub</option>
        <option>YouTube</option>
        <option>PDF</option>
        <option>Article</option>
      </select>

      <textarea
        rows={4}
        placeholder="Description (optional)"
        value={description}
        onChange={(e) =>
          setDescription(e.target.value)
        }
        className="mb-5 w-full rounded-xl border p-3"
      />

      <button
        type="submit"
        className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
      >
        Save Resource
      </button>
    </form>
  );
}