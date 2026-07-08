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
      "bg-emerald-50 border-emerald-200 text-emerald-700",

    blue:
      "bg-blue-50 border-blue-200 text-blue-700",

    purple:
      "bg-purple-50 border-purple-200 text-purple-700",

    orange:
      "bg-orange-50 border-orange-200 text-orange-700",
  };

  return (
    <div
      className={`rounded-3xl border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${colors[color]}`}
    >
      <div className="mb-3 text-4xl">
        {emoji}
      </div>

      <p className="text-sm font-medium">
        {title}
      </p>

      <h2 className="mt-2 text-4xl font-bold">
        {value}
      </h2>
    </div>
  );
}