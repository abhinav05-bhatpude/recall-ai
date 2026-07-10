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

  function getBadgeColor() {
    switch (type.toLowerCase()) {
      case "github":
        return "bg-slate-500/20 text-slate-200";

      case "youtube":
        return "bg-red-500/20 text-red-300";

      case "pdf":
        return "bg-orange-500/20 text-orange-300";

      case "article":
        return "bg-emerald-500/20 text-emerald-300";

      default:
        return "bg-blue-500/20 text-blue-300";
    }
  }

  return (
    <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-emerald-400/30 hover:shadow-emerald-500/10">

      <div className="mb-5 flex items-center justify-between">

        <div className="text-5xl transition duration-300 group-hover:scale-110">
          {getIcon()}
        </div>

        <button
          onClick={handleDelete}
          className="rounded-xl border border-red-400/20 bg-red-500/10 px-3 py-2 text-sm font-medium text-red-300 transition hover:bg-red-500/20"
        >
          🗑 Delete
        </button>

      </div>

      <h3 className="mb-3 text-2xl font-bold text-white">
        {title}
      </h3>

      <span
        className={`inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${getBadgeColor()}`}
      >
        {type}
      </span>

      <p className="mt-5 min-h-[72px] leading-7 text-slate-300">
        {description || "No description available."}
      </p>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-white transition duration-300 hover:bg-emerald-600 hover:shadow-lg"
      >
        🔗 Open Resource
      </a>

    </div>
  );
}