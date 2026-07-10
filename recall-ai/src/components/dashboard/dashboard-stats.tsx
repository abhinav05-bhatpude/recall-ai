interface DashboardStatsProps {
  notes: number;
  folders: number;
  resources: number;
}

export function DashboardStats({
  notes,
  folders,
  resources,
}: DashboardStatsProps) {
  return (
    <div className="mb-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <StatCard
        emoji="📝"
        title="Notes"
        value={notes}
        color="emerald"
      />

      <StatCard
        emoji="📁"
        title="Folders"
        value={folders}
        color="blue"
      />

      <StatCard
        emoji="🤖"
        title="AI Features"
        value={3}
        color="purple"
      />

      <StatCard
        emoji="📚"
        title="Resources"
        value={resources}
        color="orange"
      />
    </div>
  );
}

interface StatCardProps {
  emoji: string;
  title: string;
  value: number;
  color:
    | "emerald"
    | "blue"
    | "purple"
    | "orange";
}

function StatCard({
  emoji,
  title,
  value,
  color,
}: StatCardProps) {
  const colors = {
    emerald:
      "border-emerald-400/20 bg-emerald-500/10 text-emerald-300",

    blue:
      "border-blue-400/20 bg-blue-500/10 text-blue-300",

    purple:
      "border-purple-400/20 bg-purple-500/10 text-purple-300",

    orange:
      "border-orange-400/20 bg-orange-500/10 text-orange-300",
  };

  return (
    <div
      className={`group rounded-3xl border p-6 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-emerald-500/10 ${colors[color]}`}
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="text-5xl transition duration-300 group-hover:scale-110">
          {emoji}
        </div>

        <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-300">
          {title}
        </span>
      </div>

      <h2 className="text-5xl font-extrabold text-white">
        {value}
      </h2>

      <p className="mt-2 text-sm text-slate-300">
        Total {title.toLowerCase()}
      </p>
    </div>
  );
}