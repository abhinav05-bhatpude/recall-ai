import Link from "next/link";

export function DemoCTA() {
  return (
    <div className="my-8 rounded-3xl border border-emerald-400/20 bg-gradient-to-r from-emerald-500/10 to-green-500/10 p-8 text-center">

      <div className="mb-4 text-5xl">
        🚀
      </div>

      <h2 className="text-3xl font-bold text-white">
        Unlock the Full Experience
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-slate-300">
        You're currently exploring RecallAI in Demo Mode.
        Sign in with Google to create notes, manage folders,
        save resources and access your personal AI workspace.
      </p>

      <Link
        href="/login"
        className="mt-8 inline-block rounded-xl bg-emerald-500 px-8 py-4 font-semibold text-white transition hover:bg-emerald-600"
      >
        Continue with Google →
      </Link>

    </div>
  );
}