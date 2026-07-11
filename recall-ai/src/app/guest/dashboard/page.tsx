import Link from "next/link";

import {
  demoFolders,
  demoNotes,
  demoResources,
} from "@/lib/demo/demo-data";

export default function GuestDashboardPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900 p-8 text-white">

      <div className="mx-auto max-w-7xl">

        <div className="mb-10 flex items-center justify-between">

          <div>
            <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-300">
              👤 Guest Mode
            </span>

            <h1 className="mt-5 text-5xl font-bold">
              Demo Workspace
            </h1>

            <p className="mt-3 text-slate-300">
              Explore RecallAI without creating an account.
            </p>
          </div>

          <Link
            href="/login"
            className="rounded-xl bg-emerald-500 px-6 py-3 font-semibold transition hover:bg-emerald-600"
          >
            Sign in
          </Link>

        </div>

        {/* Stats */}

        <div className="mb-10 grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-slate-400">
              Notes
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              {demoNotes.length}
            </h2>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-slate-400">
              Folders
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              {demoFolders.length}
            </h2>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-slate-400">
              Resources
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              {demoResources.length}
            </h2>
          </div>

        </div>

        {/* Demo Notes */}

        <section className="mb-12">

          <h2 className="mb-5 text-3xl font-bold">
            📝 Demo Notes
          </h2>

          <div className="grid gap-6 md:grid-cols-3">

            {demoNotes.map((note) => (
              <div
                key={note.id}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <h3 className="text-xl font-bold">
                  {note.title}
                </h3>

                <p className="mt-4 text-slate-300">
                  {note.content}
                </p>
              </div>
            ))}

          </div>

        </section>

        {/* Demo Folders */}

        <section className="mb-12">

          <h2 className="mb-5 text-3xl font-bold">
            📁 Demo Folders
          </h2>

          <div className="flex flex-wrap gap-4">

            {demoFolders.map((folder) => (
              <div
                key={folder.id}
                className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-5 py-3"
              >
                {folder.name}
              </div>
            ))}

          </div>

        </section>

        {/* Demo Resources */}

        <section>

          <h2 className="mb-5 text-3xl font-bold">
            📚 Demo Resources
          </h2>

          <div className="grid gap-6 md:grid-cols-2">

            {demoResources.map((resource) => (
              <div
                key={resource.id}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <h3 className="text-xl font-bold">
                  {resource.title}
                </h3>

                <p className="mt-2 text-slate-300">
                  {resource.description}
                </p>

                <a
                  href={resource.url}
                  target="_blank"
                  className="mt-4 inline-block text-emerald-400 hover:text-emerald-300"
                >
                  Visit →
                </a>
              </div>
            ))}

          </div>

        </section>

      </div>

    </main>
  );
}