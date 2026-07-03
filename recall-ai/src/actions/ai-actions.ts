"use server";

import { ai } from "@/lib/gemini";

export async function summarizeNote(
  content: string
) {
  const response =
    await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `
Summarize the following note in 5 concise sentences.

${content}
`,
    });

  return response.text;
}

export async function generateKeyPoints(
  content: string
) {
  const response =
    await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `
Extract the most important key points from this note.

Return them as bullet points.

${content}
`,
    });

  return response.text;
}

export async function generateStudyNotes(
  content: string
) {
  const response =
    await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `
Turn this note into easy-to-understand study notes.

Include:

- Main concepts
- Important facts
- Short explanations

${content}
`,
    });

  return response.text;
}