import Link from "next/link";

export function Sidebar() {
  return (
    <aside className="w-64 border-r min-h-screen p-4">
      <h2 className="mb-8 text-2xl font-bold">
        RecallAI
      </h2>

      <nav className="space-y-4">
        <Link
          href="/dashboard"
          className="block"
        >
          Dashboard
        </Link>

        <Link
          href="#"
          className="block"
        >
          Notes
        </Link>

        <Link
          href="#"
          className="block"
        >
          Folders
        </Link>

        <Link
          href="#"
          className="block"
        >
          Settings
        </Link>
      </nav>
    </aside>
  );
}