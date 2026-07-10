import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900 px-6">

      {/* Background Blur Effects */}
      <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-green-400/10 blur-3xl" />

      <div className="relative z-10 max-w-6xl text-center">

        <div className="mb-8">
          <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-5 py-2 text-sm font-semibold text-emerald-300">
            🚀 AI Powered Knowledge Management
          </span>
        </div>

        <h1 className="mb-6 text-6xl font-extrabold tracking-tight text-white md:text-7xl">
          Recall
          <span className="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
            AI
          </span>
        </h1>

        <p className="mx-auto mb-12 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
          Organize your notes, folders, and learning resources in one place.
          Generate AI-powered summaries, key points, and study notes to learn
          smarter, faster, and more efficiently.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/login"
            className="rounded-xl bg-emerald-500 px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-emerald-600"
          >
            🚀 Get Started
          </Link>

          <Link
            href="/guest"
            className="rounded-xl border border-emerald-400/30 bg-white/10 px-8 py-4 font-semibold text-emerald-300 backdrop-blur transition-all duration-300 hover:scale-105 hover:bg-white/15"
          >
            👤 Continue as Guest
          </Link>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-emerald-400/30">
            <div className="mb-4 text-5xl">🤖</div>

            <h3 className="text-xl font-bold text-white">
              AI Summaries
            </h3>

            <p className="mt-3 leading-7 text-slate-400">
              Generate concise summaries from long notes using Gemini AI.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-emerald-400/30">
            <div className="mb-4 text-5xl">📚</div>

            <h3 className="text-xl font-bold text-white">
              Knowledge Hub
            </h3>

            <p className="mt-3 leading-7 text-slate-400">
              Save GitHub repositories, websites, PDFs and YouTube resources.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-emerald-400/30">
            <div className="mb-4 text-5xl">📝</div>

            <h3 className="text-xl font-bold text-white">
              Smart Notes
            </h3>

            <p className="mt-3 leading-7 text-slate-400">
              Organize your knowledge with folders and AI-powered study tools.
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}