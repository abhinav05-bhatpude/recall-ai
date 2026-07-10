import { auth } from "@/auth";
import { redirect } from "next/navigation";

import { getResources } from "@/actions/note-actions";

import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Navbar } from "@/components/layout/navbar";
import { Sidebar } from "@/components/layout/sidebar";

import { CreateResourceForm } from "@/components/resources/create-resource-form";
import { ResourceGrid } from "@/components/resources/resource-grid";

interface ResourcesPageProps {
  searchParams: Promise<{
    search?: string;
  }>;
}

export default async function ResourcesPage({
  searchParams,
}: ResourcesPageProps) {
  const session = await auth();

  

  const { search } =
    await searchParams;

  const resources =
    await getResources(search);

  return (
    <DashboardLayout
      navbar={<Navbar />}
      sidebar={<Sidebar />}
    >
      <h1 className="mb-6 text-3xl font-bold">
        📚 Knowledge Hub
      </h1>

      <CreateResourceForm />

      <ResourceGrid
        resources={resources}
      />
    </DashboardLayout>
  );
}