import { auth } from "@/auth";
import { redirect } from "next/navigation";

import {
  getFolders,
  getNotes,
  getResources,
} from "@/actions/note-actions";

import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Navbar } from "@/components/layout/navbar";
import { Sidebar } from "@/components/layout/sidebar";

import { DashboardStats } from "@/components/dashboard/dashboard-stats";
import { FolderList } from "@/components/folders/folder-list";

import { SearchBar } from "@/components/search/search-bar";
import { SearchInfo } from "@/components/search/search-info";

import { CreateNoteForm } from "@/components/notes/create-note-form";
import { NotesGrid } from "@/components/notes/notes-grid";

import { CreateResourceForm } from "@/components/resources/create-resource-form";
import { ResourceGrid } from "@/components/resources/resource-grid";

interface DashboardPageProps {
  searchParams: Promise<{
    folder?: string;
    search?: string;
  }>;
}

export default async function DashboardPage({
  searchParams,
}: DashboardPageProps) {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  const {
    folder,
    search,
  } = await searchParams;

  const folders =
    await getFolders();

  const notes =
    await getNotes(
      folder,
      search
    );

  const resources =
    await getResources(
      search
    );

  const selectedFolder =
    folders.find(
      (f) => f.id === folder
    );

  return (
    <DashboardLayout
      navbar={<Navbar />}
      sidebar={<Sidebar />}
    >
      <DashboardStats
        notes={notes.length}
        folders={folders.length}
      />

      <FolderList
        folders={folders}
      />

      <SearchBar />

      <CreateNoteForm
        folders={folders}
      />

      <CreateResourceForm />

      <SearchInfo
        search={search}
        folderName={
          selectedFolder?.name
        }
      />

      <NotesGrid
        notes={notes}
        search={search}
      />

      <div className="mt-12">
        <h2 className="mb-6 text-3xl font-bold text-slate-800">
          📚 Knowledge Hub
        </h2>

        <ResourceGrid
          resources={resources}
        />
      </div>
    </DashboardLayout>
  );
}