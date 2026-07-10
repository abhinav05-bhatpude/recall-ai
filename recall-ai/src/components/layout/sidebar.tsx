"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: "🏠",
    },
    {
      label: "Notes",
      href: "/dashboard/notes",
      icon: "📝",
    },
    {
      label: "Folders",
      href: "/dashboard/folders",
      icon: "📁",
    },
    {
      label: "Knowledge Hub",
      href: "/dashboard/resources",
      icon: "📚",
    },
    {
      label: "Settings",
      href: "#",
      icon: "⚙️",
    },
  ];

  return (
    <aside className="sticky top-24 h-fit w-72 rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
      <div className="mb-10">
        <h1 className="text-3xl font-extrabold text-white">
          Recall
          <span className="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
            AI
          </span>
        </h1>

        <p className="mt-2 text-sm text-slate-300">
          AI Personal Knowledge Manager
        </p>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 rounded-2xl px-4 py-3 font-medium transition-all duration-300 ${
                active
                  ? "bg-emerald-500 text-white shadow-lg"
                  : "text-slate-200 hover:bg-white/10 hover:text-white"
              }`}
            >
              <span className="text-xl">
                {item.icon}
              </span>

              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-10 rounded-2xl border border-emerald-400/20 bg-gradient-to-br from-emerald-500/20 to-green-500/20 p-5 backdrop-blur">
        <h3 className="font-semibold text-white">
          🚀 RecallAI
        </h3>

        <p className="mt-2 text-sm text-slate-300">
          Organize your knowledge with AI and boost your productivity.
        </p>
      </div>
    </aside>
  );
}