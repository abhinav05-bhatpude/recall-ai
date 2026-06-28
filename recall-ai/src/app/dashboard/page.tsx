import { auth } from "@/auth";
import { redirect } from "next/navigation";

import {
  getFolders,
  getNotes,
} from "@/actions/note-actions";

import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Navbar } from "@/components/layout/navbar";
import { Sidebar } from "@/components/layout/sidebar";

import { FolderList } from "@/components/folders/folder-list";
import { NotesGrid } from "@/components/notes/notes-grid";
import { CreateNoteForm } from "@/components/notes/create-note-form";

import { SearchBar } from "@/components/search/search-bar";
import { SearchInfo } from "@/components/search/search-info";

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

  const folders = await getFolders();

  const notes = await getNotes(
    folder,
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
      <FolderList folders={folders} />

      <SearchBar />

      <CreateNoteForm
        folders={folders}
      />

      <SearchInfo
        search={search}
        folderName={selectedFolder?.name}
      />

      <NotesGrid
        notes={notes}
        search={search}
      />
    </DashboardLayout>
  );
}