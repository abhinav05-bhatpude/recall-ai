import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-5xl font-bold">RecallAI</h1>

      <p className="text-muted-foreground">
        AI Powered Knowledge Management Platform
      </p>

      <Link
        href="/dashboard"
        className="rounded-md bg-black px-4 py-2 text-white"
      >
        Open Dashboard
      </Link>
    </main>
  );
}