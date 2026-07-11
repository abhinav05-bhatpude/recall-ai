import Link from "next/link";

interface DemoActionProps {
  action: string;
}

export function DemoAction({
  action,
}: DemoActionProps) {
  return (
    <div className="mt-4 rounded-xl border border-amber-400/20 bg-amber-500/10 p-4">

      <p className="text-sm text-amber-300">
        🔒 <strong>{action}</strong> is disabled in Demo Mode.
      </p>

      <Link
        href="/login"
        className="mt-3 inline-block text-sm font-semibold text-emerald-300 hover:text-emerald-200"
      >
        Sign in with Google →
      </Link>

    </div>
  );
}