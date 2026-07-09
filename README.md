# 🧠 RecallAI

> An AI-powered Personal Knowledge Management Platform built with Next.js, TypeScript, Prisma, PostgreSQL, and Gemini AI.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql)
![Gemini AI](https://img.shields.io/badge/Gemini_AI-4285F4?style=for-the-badge&logo=google)
![Auth.js](https://img.shields.io/badge/Auth.js-000000?style=for-the-badge)

---

# 📖 Overview

RecallAI is an AI-powered Personal Knowledge Management platform that helps users organize notes, folders, and learning resources while leveraging AI to generate summaries, key points, and study notes.

It demonstrates modern full-stack development using Next.js, Prisma, PostgreSQL, Auth.js, and Google's Gemini AI.

---

# ✨ Features

## 🤖 AI

- AI Note Summarization
- AI Key Points
- AI Study Notes

## 📝 Notes

- Create Notes
- Edit Notes
- Delete Notes
- Search Notes

## 📁 Folders

- Create Folders
- Delete Folders
- Organize Notes

## 📚 Knowledge Hub

- Save Websites
- Save GitHub Repositories
- Save PDFs
- Save YouTube Videos

## 📊 Dashboard

- Notes Statistics
- Folder Statistics
- Resource Statistics

## 🔐 Authentication

- Google Sign-In
- Protected Routes

---

# 🛠 Tech Stack

| Category | Technology |
|----------|------------|
| Frontend | Next.js 15, React 19, TypeScript, Tailwind CSS |
| Backend | Next.js Server Actions |
| Database | PostgreSQL + Prisma ORM |
| Authentication | Auth.js |
| AI | Google Gemini API |
| Deployment | Vercel |

---

# 📸 Screenshots

| Feature | Status |
|---------|--------|
| Dashboard | Coming Soon |
| Notes | Coming Soon |
| Knowledge Hub | Coming Soon |
| AI Summary | Coming Soon |

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/abhinav05-bhatpude/recall-ai.git
```

```bash
cd recall-ai
```

---

## Install Dependencies

```bash
npm install
```

---

# ✅ Prerequisites

Before running the project, make sure you have:

- Node.js 20+
- npm
- PostgreSQL Database (Neon recommended)
- Google Cloud OAuth Credentials
- Gemini API Key
- Git

---



---

## Run Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Build Production

```bash
npm run build
```

---

## Start Production

```bash
npm start
```

---

# 🏗 Architecture

```text
User
 │
 ▼
Next.js
 │
 ├── Authentication
 ├── Dashboard
 ├── Notes
 ├── Folders
 ├── Knowledge Hub
 └── AI Services
         │
         ▼
 PostgreSQL
```
---

# 🤖 AI Features

RecallAI uses Google's **Gemini AI** to transform raw notes into structured learning material.

### ✨ AI Note Summarization

Generate concise summaries from lengthy notes, making revision faster and easier.

### 📝 AI Key Points

Extract the most important concepts from any note with a single click.

### 📚 AI Study Notes

Automatically generate structured study notes suitable for revision and exam preparation.

---

# 🔄 Application Workflow

```text
                 Google Login
                      │
                      ▼
             User Dashboard
                      │
      ┌───────────────┼────────────────┐
      │               │                │
      ▼               ▼                ▼
   Notes          Folders       Knowledge Hub
      │               │                │
      └───────────────┼────────────────┘
                      │
                      ▼
              Google Gemini AI
                      │
      ┌───────────────┼────────────────┐
      │               │                │
      ▼               ▼                ▼
 AI Summary     Key Points      Study Notes
                      │
                      ▼
              Better Learning
```

---

# 🎯 Why RecallAI?

Unlike traditional note-taking applications, RecallAI combines note management with AI-powered learning assistance.

It enables users to:

- Organize notes efficiently
- Manage learning resources
- Generate AI-powered summaries
- Create structured study notes
- Improve productivity while learning

The project demonstrates production-ready full-stack development using modern technologies and AI integration.
---

# 🚀 Project Status

✅ Active Development

---

# 👨‍💻 Author

**Abhinav Bhatpude**

Aspiring Full-Stack Developer • AI Enthusiast • Building in Public

---

⭐ If you found this project useful, consider giving it a star!
