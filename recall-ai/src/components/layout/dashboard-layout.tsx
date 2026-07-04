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
    <div className="min-h-screen bg-slate-50">
      {navbar}

      <div className="page-container flex gap-6 px-6 py-8">
        {sidebar}

        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}