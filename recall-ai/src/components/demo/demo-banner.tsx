import Link from "next/link";

export function DemoBanner() {
  return (
    <div className="mb-6 rounded-2xl border border-amber-400/20 bg-amber-500/10 p-5">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div>
          <h2 className="text-lg font-semibold text-amber-300">
            👋 You're exploring RecallAI in Demo Mode
          </h2>

          <p className="mt-1 text-sm text-slate-300">
            Changes won't be saved. Sign in with Google to create your own
            workspace.
          </p>
        </div>

        <Link
          href="/login"
          className="rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-white transition hover:bg-emerald-600"
        >
          Sign in with Google
        </Link>

      </div>
    </div>
  );
}