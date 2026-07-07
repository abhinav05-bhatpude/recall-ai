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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      {navbar}

      <div className="mx-auto flex max-w-7xl gap-8 px-6 py-8">
        {sidebar}

        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}