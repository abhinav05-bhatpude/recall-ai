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
      className="mb-8 rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-xl"
    >
      <h2 className="mb-6 text-2xl font-bold text-white">
        📚 Save Resource
      </h2>

      <input
        placeholder="Resource Title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
        className="mb-4 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-emerald-400/40 focus:ring-2 focus:ring-emerald-500/20"
      />

      <input
        placeholder="https://example.com"
        value={url}
        onChange={(e) =>
          setUrl(e.target.value)
        }
        className="mb-4 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-emerald-400/40 focus:ring-2 focus:ring-emerald-500/20"
      />

      <select
        value={type}
        onChange={(e) =>
          setType(e.target.value)
        }
        className="mb-4 w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-emerald-400/40 focus:ring-2 focus:ring-emerald-500/20"
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
        className="mb-5 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-emerald-400/40 focus:ring-2 focus:ring-emerald-500/20"
      />

      <button
        type="submit"
        className="rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-emerald-600 hover:to-green-700"
      >
        🚀 Save Resource
      </button>
    </form>
  );
}