"use server";

import { ai } from "@/lib/gemini";

export async function summarizeNote(
  content: string
) {
  try {
    const response =
      await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `
You are an expert study assistant.

Summarize the following note.

Rules:
- Maximum 5 concise sentences.
- Keep only the most important information.
- Use simple English.
- Do not repeat ideas.
- Return plain text only.

Note:

${content}
`,
      });

    return response.text;
  } catch (error) {
    console.error(error);

    return "❌ Unable to generate summary. Please try again.";
  }
}

export async function generateKeyPoints(
  content: string
) {
  try {
    const response =
      await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `
You are an expert note analyzer.

Extract the most important points.

Rules:
- Return 5–8 bullet points.
- Each point should be one sentence.
- Remove unnecessary explanations.
- Return plain text only.

Note:

${content}
`,
      });

    return response.text;
  } catch (error) {
    console.error(error);

    return "❌ Unable to generate key points. Please try again.";
  }
}

export async function generateStudyNotes(
  content: string
) {
  try {
    const response =
      await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `
You are an expert teacher.

Convert this note into study material.

Format:

Overview

Important Concepts

Examples (if applicable)

Quick Revision

Use headings exactly as above.

Keep the explanation beginner friendly.

Return plain text only.

Note:

${content}
`,
      });

    return response.text;
  } catch (error) {
    console.error(error);

    return "❌ Unable to generate study notes. Please try again.";
  }
}