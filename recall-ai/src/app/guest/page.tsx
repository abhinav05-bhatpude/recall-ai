import Link from "next/link";

export default function GuestPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900 px-6">

      {/* Background Blurs */}
      <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-green-400/10 blur-3xl" />

      <div className="relative z-10 w-full max-w-3xl rounded-3xl border border-white/10 bg-white/10 p-10 text-center shadow-2xl backdrop-blur-xl">

        <div className="mb-6 text-6xl">
          👋
        </div>

        <h1 className="mb-4 text-5xl font-bold text-white">
          Welcome to Guest Mode
        </h1>

        <p className="mx-auto mb-8 max-w-2xl leading-8 text-slate-300">
          Explore RecallAI without creating an account.
          You'll be able to browse a demo workspace and experience
          the AI-powered note management system.
        </p>

        <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-6">

          <h2 className="mb-4 text-xl font-semibold text-emerald-300">
            Guest Mode Includes
          </h2>

          <div className="grid gap-3 text-left text-slate-200 md:grid-cols-2">
            <p>✅ Demo Notes</p>
            <p>✅ Demo Folders</p>
            <p>✅ Knowledge Hub</p>
            <p>✅ AI Feature Preview</p>
            <p>❌ Changes won't be saved</p>
            <p>❌ Editing disabled</p>
          </div>

        </div>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

          <Link
            href="/guest/dashboard"
            className="rounded-xl bg-emerald-500 px-8 py-4 font-semibold text-white transition hover:bg-emerald-600"
          >
            Explore Demo
          </Link>

          <Link
            href="/login"
            className="rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white transition hover:bg-white/20"
          >
            Sign in with Google
          </Link>

        </div>

      </div>

    </main>
  );
}