import { LogoutButton } from "@/components/auth/logout-button";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-white/10 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div>
          <h1 className="text-2xl font-bold text-white">
            Welcome Back 👋
          </h1>

          <p className="text-sm text-slate-300">
            Manage your AI knowledge workspace
          </p>
        </div>

        <LogoutButton />
      </div>
    </nav>
  );
}