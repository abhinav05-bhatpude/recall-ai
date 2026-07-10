import { auth } from "@/auth";
import { redirect } from "next/navigation";

import {
  getFolders,
  getNotes,
} from "@/actions/note-actions";

import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Navbar } from "@/components/layout/navbar";
import { Sidebar } from "@/components/layout/sidebar";

import { SearchBar } from "@/components/search/search-bar";
import { SearchInfo } from "@/components/search/search-info";

import { CreateNoteForm } from "@/components/notes/create-note-form";
import { NotesGrid } from "@/components/notes/notes-grid";

interface NotesPageProps {
  searchParams: Promise<{
    folder?: string;
    search?: string;
  }>;
}

export default async function NotesPage({
  searchParams,
}: NotesPageProps) {
  const session = await auth();

 

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

  const selectedFolder =
    folders.find(
      (f) => f.id === folder
    );

  return (
    <DashboardLayout
      navbar={<Navbar />}
      sidebar={<Sidebar />}
    >
      <h1 className="mb-6 text-3xl font-bold">
        📝 Notes
      </h1>

       <SearchBar /> 

      <CreateNoteForm
        folders={folders}
      />

      <SearchInfo
        search={search}
        folderName={
          selectedFolder?.name
        }
      />

      <NotesGrid
        notes={notes}
      />
    </DashboardLayout>
  );
}