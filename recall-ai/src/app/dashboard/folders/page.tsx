import { auth } from "@/auth";
import { redirect } from "next/navigation";

import { getFolders } from "@/actions/note-actions";

import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Navbar } from "@/components/layout/navbar";
import { Sidebar } from "@/components/layout/sidebar";

import { FolderList } from "@/components/folders/folder-list";
import { CreateFolderForm } from "@/components/folders/create-folder-form";

export default async function FoldersPage() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  const folders =
    await getFolders();

  return (
    <DashboardLayout
      navbar={<Navbar />}
      sidebar={<Sidebar />}
    >
      <h1 className="mb-6 text-3xl font-bold">
        📁 Folders
      </h1>

      <CreateFolderForm />

      <FolderList folders={folders} />
    </DashboardLayout>
  );
}