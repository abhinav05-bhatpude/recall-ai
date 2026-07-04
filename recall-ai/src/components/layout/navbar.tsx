import { LogoutButton } from "@/components/auth/logout-button";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-200 bg-white/90 px-8 py-4 shadow-sm backdrop-blur">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          Recall<span className="text-emerald-600">AI</span>
        </h1>

        <p className="text-sm text-slate-500">
          AI-powered Knowledge Workspace
        </p>
      </div>

      <LogoutButton />
    </nav>
  );
}