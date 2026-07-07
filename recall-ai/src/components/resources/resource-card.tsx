"use client";

import { useRouter } from "next/navigation";
import { deleteResource } from "@/actions/note-actions";

interface ResourceCardProps {
  id: string;
  title: string;
  description?: string;
  url: string;
  type: string;
}

export function ResourceCard({
  id,
  title,
  description,
  url,
  type,
}: ResourceCardProps) {
  const router = useRouter();

  async function handleDelete() {
    const confirmed = window.confirm(
      "Are you sure you want to delete this resource?"
    );

    if (!confirmed) return;

    try {
      await deleteResource(id);
      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Failed to delete resource.");
    }
  }

  function getIcon() {
    switch (type.toLowerCase()) {
      case "github":
        return "💻";
      case "youtube":
        return "🎥";
      case "pdf":
        return "📄";
      case "article":
        return "📰";
      default:
        return "🌐";
    }
  }

  function getColor() {
    switch (type.toLowerCase()) {
      case "github":
        return "border-slate-300 bg-slate-50";
      case "youtube":
        return "border-red-200 bg-red-50";
      case "pdf":
        return "border-orange-200 bg-orange-50";
      case "article":
        return "border-emerald-200 bg-emerald-50";
      default:
        return "border-blue-200 bg-blue-50";
    }
  }

  return (
    <div
      className={`rounded-3xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${getColor()}`}
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="text-4xl">
          {getIcon()}
        </div>

        <button
          onClick={handleDelete}
          className="rounded-lg bg-red-50 px-3 py-2 text-sm font-medium text-red-700 hover:bg-red-100"
        >
          🗑 Delete
        </button>
      </div>

      <h3 className="mb-2 text-xl font-bold text-slate-800">
        {title}
      </h3>

      <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
        {type}
      </span>

      <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-600">
        {description || "No description available."}
      </p>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center font-semibold text-emerald-600 transition hover:text-emerald-700"
      >
        Open Resource →
      </a>
    </div>
  );
}