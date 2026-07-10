import { signIn } from "@/auth";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900 px-6">

      {/* Background Blurs */}
      <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-green-400/10 blur-3xl" />

      <div className="relative z-10 grid w-full max-w-6xl gap-12 lg:grid-cols-2">

        {/* Left Section */}
        <div className="flex flex-col justify-center text-white">
          <span className="mb-5 w-fit rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-300">
            🚀 AI Powered Knowledge Platform
          </span>

          <h1 className="mb-6 text-6xl font-extrabold leading-tight">
            Welcome to
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
              RecallAI
            </span>
          </h1>

          <p className="max-w-lg text-lg leading-8 text-slate-300">
            Organize your notes, save learning resources, and generate
            AI-powered summaries, key points, and study notes—all in one
            beautiful workspace.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <div className="mb-3 text-3xl">🤖</div>
              <h3 className="font-semibold">AI Summaries</h3>
              <p className="mt-2 text-sm text-slate-400">
                Turn lengthy notes into concise summaries instantly.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <div className="mb-3 text-3xl">📚</div>
              <h3 className="font-semibold">Knowledge Hub</h3>
              <p className="mt-2 text-sm text-slate-400">
                Store articles, GitHub repos, PDFs and learning resources.
              </p>
            </div>
          </div>
        </div>

        {/* Login Card */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">

            <div className="mb-8 text-center">
              <div className="mb-4 text-5xl">🧠</div>

              <h2 className="text-3xl font-bold text-white">
                Sign In
              </h2>

              <p className="mt-2 text-slate-300">
                Continue to your AI workspace
              </p>
            </div>

            <form
              action={async () => {
                "use server";

                await signIn("google", {
                  redirectTo: "/dashboard",
                });
              }}
            >
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-white px-6 py-4 font-semibold text-slate-800 transition hover:scale-[1.02] hover:bg-slate-100"
              >
                <span className="text-xl">🔐</span>
                Continue with Google
              </button>
            </form>

            <button
              disabled
              className="mt-4 w-full cursor-not-allowed rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-6 py-4 font-semibold text-emerald-300 opacity-70"
            >
              👤 Continue as Guest (Coming Soon)
            </button>

            <p className="mt-6 text-center text-sm text-slate-400">
              By continuing, you agree to our Terms & Privacy Policy.
            </p>

            <Link
              href="/"
              className="mt-6 block text-center text-sm text-emerald-300 transition hover:text-emerald-200"
            >
              ← Back to Home
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}