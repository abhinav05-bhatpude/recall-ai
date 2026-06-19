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
    <div className="min-h-screen">
      {navbar}

      <div className="flex">
        {sidebar}

        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}