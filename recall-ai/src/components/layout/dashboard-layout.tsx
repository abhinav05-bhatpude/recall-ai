interface DashboardLayoutProps {
  sidebar: React.ReactNode;
  navbar: React.ReactNode;
  children: React.ReactNode;
}

export function DashboardLayout({
  sidebar,
  navbar,
  children,
}: DashboardLayoutProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900">

      {/* Background Blurs */}
      <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />

      <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-green-400/10 blur-3xl" />

      <div className="relative z-10">
        {navbar}

        <div className="mx-auto flex max-w-7xl gap-8 px-6 py-8">
          {sidebar}

          <main className="flex-1">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}