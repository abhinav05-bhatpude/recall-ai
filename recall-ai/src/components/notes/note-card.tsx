"use client";

import { useState } from "react";
import {
  summarizeNote,
  generateKeyPoints,
  generateStudyNotes,
} from "@/actions/ai-actions";

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

  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-lg font-semibold">
          {title}
        </h3>

        <button className="text-sm text-blue-600 hover:text-blue-800">
          ✏️ Edit
        </button>
      </div>

      <p className="mb-5 whitespace-pre-wrap text-sm leading-7 text-gray-700">
        {content}
      </p>

      <div className="mb-5 flex flex-wrap gap-2">
        <button
          onClick={handleSummarize}
          disabled={loadingAction !== null}
          className="rounded-lg border px-3 py-2 text-sm transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loadingAction === "summary"
            ? "⏳ Summarizing..."
            : "✨ Summarize"}
        </button>

        <button
          onClick={handleKeyPoints}
          disabled={loadingAction !== null}
          className="rounded-lg border px-3 py-2 text-sm transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loadingAction === "points"
            ? "⏳ Generating..."
            : "📝 Key Points"}
        </button>

        <button
          onClick={handleStudyNotes}
          disabled={loadingAction !== null}
          className="rounded-lg border px-3 py-2 text-sm transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loadingAction === "study"
            ? "⏳ Generating..."
            : "📚 Study Notes"}
        </button>
      </div>

      {summary && (
        <div className="mb-4 rounded-xl border border-gray-200 bg-gray-50 p-4 shadow-sm">
          <div className="mb-3 flex items-center gap-2">
            <span className="text-lg">
              🤖
            </span>

            <h4 className="font-semibold">
              AI Summary
            </h4>
          </div>

          <div className="max-h-56 overflow-y-auto whitespace-pre-wrap text-sm leading-7 text-gray-700">
            {summary}
          </div>
        </div>
      )}

      {keyPoints && (
        <div className="mb-4 rounded-xl border border-blue-200 bg-blue-50 p-4 shadow-sm">
          <div className="mb-3 flex items-center gap-2">
            <span className="text-lg">
              📝
            </span>

            <h4 className="font-semibold">
              Key Points
            </h4>
          </div>

          <div className="max-h-56 overflow-y-auto whitespace-pre-wrap text-sm leading-7 text-gray-700">
            {keyPoints}
          </div>
        </div>
      )}

      {studyNotes && (
        <div className="mb-4 rounded-xl border border-green-200 bg-green-50 p-4 shadow-sm">
          <div className="mb-3 flex items-center gap-2">
            <span className="text-lg">
              📚
            </span>

            <h4 className="font-semibold">
              Study Notes
            </h4>
          </div>

          <div className="max-h-56 overflow-y-auto whitespace-pre-wrap text-sm leading-7 text-gray-700">
            {studyNotes}
          </div>
        </div>
      )}

      {createdAt && (
        <p className="mt-4 border-t pt-3 text-xs text-gray-400">
          Created on{" "}
          {new Date(
            createdAt
          ).toLocaleDateString()}
        </p>
      )}
    </div>
  );
}