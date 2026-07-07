"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  summarizeNote,
  generateKeyPoints,
  generateStudyNotes,
} from "@/actions/ai-actions";

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

  const [summary, setSummary] =
    useState("");

  const [keyPoints, setKeyPoints] =
    useState("");

  const [studyNotes, setStudyNotes] =
    useState("");

  const [loadingAction, setLoadingAction] =
    useState<
      "summary" | "points" | "study" | null
    >(null);

  async function handleSummarize() {
    setLoadingAction("summary");

    try {
      const result =
        await summarizeNote(content);

      setSummary(result);
    } finally {
      setLoadingAction(null);
    }
  }

  async function handleKeyPoints() {
    setLoadingAction("points");

    try {
      const result =
        await generateKeyPoints(content);

      setKeyPoints(result);
    } finally {
      setLoadingAction(null);
    }
  }

  async function handleStudyNotes() {
    setLoadingAction("study");

    try {
      const result =
        await generateStudyNotes(content);

      setStudyNotes(result);
    } finally {
      setLoadingAction(null);
    }
  }

  async function handleDelete() {
    const confirmed =
      window.confirm(
        "Are you sure you want to delete this note?"
      );

    if (!confirmed) {
      return;
    }

    try {
      await deleteNote(id);

      router.refresh();
    } catch (error) {
      console.error(error);

      alert("Failed to delete note.");
    }
  }

  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="h-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-500" />

      <div className="p-6">
        <div className="mb-5 flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold text-slate-800">
              {title}
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              AI Powered Note
            </p>
          </div>

          <div className="flex gap-2">
            <button className="rounded-lg bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700 transition hover:bg-blue-100">
              ✏️ Edit
            </button>

            <button
              onClick={handleDelete}
              className="rounded-lg bg-red-50 px-3 py-2 text-sm font-medium text-red-700 transition hover:bg-red-100"
            >
              🗑 Delete
            </button>
          </div>
        </div>

        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="whitespace-pre-wrap leading-7 text-slate-700">
            {content}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            onClick={handleSummarize}
            disabled={
              loadingAction !== null
            }
            className="rounded-xl bg-emerald-600 px-4 py-2 font-medium text-white transition hover:bg-emerald-700 disabled:opacity-50"
          >
            {loadingAction ===
            "summary"
              ? "⏳ Summarizing..."
              : "✨ Summarize"}
          </button>

          <button
            onClick={handleKeyPoints}
            disabled={
              loadingAction !== null
            }
            className="rounded-xl bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700 disabled:opacity-50"
          >
            {loadingAction ===
            "points"
              ? "⏳ Generating..."
              : "📝 Key Points"}
          </button>

          <button
            onClick={handleStudyNotes}
            disabled={
              loadingAction !== null
            }
            className="rounded-xl border border-emerald-200 bg-white px-4 py-2 font-medium text-emerald-700 transition hover:bg-emerald-50 disabled:opacity-50"
          >
            {loadingAction ===
            "study"
              ? "⏳ Generating..."
              : "📚 Study Notes"}
          </button>
        </div>

        {summary && (
          <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
            <h4 className="mb-3 text-lg font-semibold text-emerald-700">
              🤖 AI Summary
            </h4>

            <div className="max-h-56 overflow-y-auto whitespace-pre-wrap leading-7 text-slate-700">
              {summary}
            </div>
          </div>
        )}

        {keyPoints && (
          <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">
            <h4 className="mb-3 text-lg font-semibold text-blue-700">
              📝 Key Points
            </h4>

            <div className="max-h-56 overflow-y-auto whitespace-pre-wrap leading-7 text-slate-700">
              {keyPoints}
            </div>
          </div>
        )}

        {studyNotes && (
          <div className="mt-6 rounded-2xl border border-teal-200 bg-teal-50 p-5">
            <h4 className="mb-3 text-lg font-semibold text-teal-700">
              📚 Study Notes
            </h4>

            <div className="max-h-56 overflow-y-auto whitespace-pre-wrap leading-7 text-slate-700">
              {studyNotes}
            </div>
          </div>
        )}

        {createdAt && (
          <div className="mt-6 border-t border-slate-200 pt-4">
            <p className="text-sm text-slate-500">
              📅 Created on{" "}
              {new Date(
                createdAt
              ).toLocaleDateString()}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}