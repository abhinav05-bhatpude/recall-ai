import Link from "next/link";

export function Sidebar() {
  const menuItems = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: "🏠",
      active: true,
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
    <aside className="sticky top-24 h-fit w-72 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
      <div className="mb-10">
        <h1 className="text-3xl font-extrabold tracking-tight">
          Recall
          <span className="text-emerald-600">
            AI
          </span>
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          AI Personal Knowledge Manager
        </p>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`flex items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-200 ${
              item.active
                ? "bg-emerald-600 text-white shadow-md"
                : "text-slate-700 hover:bg-slate-100"
            }`}
          >
            <span className="text-lg">
              {item.icon}
            </span>

            <span className="font-medium">
              {item.label}
            </span>
          </Link>
        ))}
      </nav>

      <div className="mt-10 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 p-5 text-white">
        <h3 className="font-semibold">
          🚀 RecallAI
        </h3>

        <p className="mt-2 text-sm opacity-90">
          Organize your knowledge,
          powered by AI.
        </p>
      </div>
    </aside>
  );
}