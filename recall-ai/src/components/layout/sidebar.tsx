import Link from "next/link";

export function Sidebar() {
  return (
    <aside className="sticky top-24 h-fit w-72 rounded-2xl border border-slate-200 bg-white p-6 shadow-md">
      <h2 className="mb-8 text-3xl font-bold text-slate-800">
        Recall
        <span className="text-emerald-600">
          AI
        </span>
      </h2>

      <nav className="space-y-3">
        <Link
          href="/dashboard"
          className="block rounded-xl bg-emerald-50 px-4 py-3 font-medium text-emerald-700 transition hover:bg-emerald-100"
        >
          🏠 Dashboard
        </Link>

        <Link
          href="#"
          className="block rounded-xl px-4 py-3 font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
        >
          📝 Notes
        </Link>

        <Link
          href="#"
          className="block rounded-xl px-4 py-3 font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
        >
          📁 Folders
        </Link>

        <Link
          href="#"
          className="block rounded-xl px-4 py-3 font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
        >
          📚 Knowledge Hub
        </Link>

        <Link
          href="#"
          className="block rounded-xl px-4 py-3 font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
        >
          ⚙️ Settings
        </Link>
      </nav>
    </aside>
  );
}