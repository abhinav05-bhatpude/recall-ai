import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-white via-emerald-50 to-green-100 px-6">
      <div className="max-w-3xl text-center">
        <div className="mb-6">
          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            🚀 AI Powered Knowledge Management
          </span>
        </div>

        <h1 className="mb-6 text-6xl font-extrabold tracking-tight text-slate-900">
          Recall
          <span className="text-emerald-600">
            AI
          </span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-slate-600">
          Organize your notes, folders and learning resources in one place.
          Generate AI-powered summaries, key points and study notes to learn
          smarter and faster.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/dashboard"
            className="rounded-xl bg-emerald-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-emerald-700"
          >
            🚀 Open Dashboard
          </Link>

          <Link
            href="/guest"
            className="rounded-xl border border-emerald-600 bg-white px-8 py-4 font-semibold text-emerald-700 transition hover:bg-emerald-50"
          >
            👤 Continue as Guest
          </Link>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow">
            <div className="mb-3 text-4xl">🤖</div>
            <h3 className="font-bold">AI Summaries</h3>
            <p className="mt-2 text-sm text-slate-500">
              Instantly summarize long notes.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <div className="mb-3 text-4xl">📚</div>
            <h3 className="font-bold">Knowledge Hub</h3>
            <p className="mt-2 text-sm text-slate-500">
              Save websites, PDFs and GitHub repositories.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <div className="mb-3 text-4xl">📝</div>
            <h3 className="font-bold">Smart Notes</h3>
            <p className="mt-2 text-sm text-slate-500">
              Organize everything in one workspace.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}