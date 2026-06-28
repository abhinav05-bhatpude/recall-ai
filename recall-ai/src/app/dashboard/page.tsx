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
import { SearchBar } from "@/components/search/search-bar";
import { CreateNoteForm } from "@/components/notes/create-note-form";

interface DashboardPageProps {
  searchParams: Promise<{
    folder?: string;
    search?:string;
  }>;
}

export default async function DashboardPage({
  searchParams,
}: DashboardPageProps) {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  const { folder,search } = await searchParams;

  const folders = await getFolders();
  const notes = await getNotes(folder,search);

  return (
    <DashboardLayout
      navbar={<Navbar />}
      sidebar={<Sidebar />}
    >
      <FolderList
        folders={folders}
      />

      <SearchBar/>

      <CreateNoteForm
        folders={folders}
      />

      <NotesGrid notes={notes}
      search={search}
       />
    </DashboardLayout>
  );
}