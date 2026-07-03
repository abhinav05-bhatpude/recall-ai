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

  const [loadingSummary, setLoadingSummary] =
    useState(false);

  const [loadingKeyPoints, setLoadingKeyPoints] =
    useState(false);

  const [loadingStudyNotes, setLoadingStudyNotes] =
    useState(false);

  async function handleSummarize() {
    setLoadingSummary(true);

    try {
      const result =
        await summarizeNote(content);

      setSummary(result);
    } finally {
      setLoadingSummary(false);
    }
  }

  async function handleKeyPoints() {
    setLoadingKeyPoints(true);

    try {
      const result =
        await generateKeyPoints(content);

      setKeyPoints(result);
    } finally {
      setLoadingKeyPoints(false);
    }
  }

  async function handleStudyNotes() {
    setLoadingStudyNotes(true);

    try {
      const result =
        await generateStudyNotes(content);

      setStudyNotes(result);
    } finally {
      setLoadingStudyNotes(false);
    }
  }

  return (
    <div className="rounded-lg border p-4 shadow-sm">
      <div className="mb-2 flex items-center justify-between">
        <h3 className="font-semibold">
          {title}
        </h3>

        <button className="text-sm text-blue-600 hover:text-blue-800">
          ✏️ Edit
        </button>
      </div>

      <p className="mb-4 whitespace-pre-wrap text-sm text-gray-600">
        {content}
      </p>

      <div className="mb-4 flex flex-wrap gap-2">
        <button
          onClick={handleSummarize}
          disabled={loadingSummary}
          className="rounded-md border px-3 py-1 text-sm transition hover:bg-gray-100 disabled:opacity-50"
        >
          {loadingSummary
            ? "Generating..."
            : "✨ Summarize"}
        </button>

        <button
          onClick={handleKeyPoints}
          disabled={loadingKeyPoints}
          className="rounded-md border px-3 py-1 text-sm transition hover:bg-gray-100 disabled:opacity-50"
        >
          {loadingKeyPoints
            ? "Generating..."
            : "📝 Key Points"}
        </button>

        <button
          onClick={handleStudyNotes}
          disabled={loadingStudyNotes}
          className="rounded-md border px-3 py-1 text-sm transition hover:bg-gray-100 disabled:opacity-50"
        >
          {loadingStudyNotes
            ? "Generating..."
            : "📚 Study Notes"}
        </button>
      </div>

      {summary && (
        <div className="mb-4 rounded-lg bg-gray-100 p-3">
          <h4 className="mb-2 font-semibold">
            AI Summary
          </h4>

          <p className="whitespace-pre-wrap text-sm">
            {summary}
          </p>
        </div>
      )}

      {keyPoints && (
        <div className="mb-4 rounded-lg bg-blue-50 p-3">
          <h4 className="mb-2 font-semibold">
            Key Points
          </h4>

          <p className="whitespace-pre-wrap text-sm">
            {keyPoints}
          </p>
        </div>
      )}

      {studyNotes && (
        <div className="mb-4 rounded-lg bg-green-50 p-3">
          <h4 className="mb-2 font-semibold">
            Study Notes
          </h4>

          <p className="whitespace-pre-wrap text-sm">
            {studyNotes}
          </p>
        </div>
      )}

      {createdAt && (
        <p className="text-xs text-gray-400">
          {new Date(
            createdAt
          ).toLocaleDateString()}
        </p>
      )}
    </div>
  );
}