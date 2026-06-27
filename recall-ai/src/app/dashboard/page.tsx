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

interface DashboardPageProps {
  searchParams: Promise<{
    folder?: string;
  }>;
}

export default async function DashboardPage({
  searchParams,
}: DashboardPageProps) {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  const { folder } = await searchParams;

  const folders = await getFolders();
  const notes = await getNotes(folder);

  return (
    <DashboardLayout
      navbar={<Navbar />}
      sidebar={<Sidebar />}
    >
      <FolderList
        folders={folders}
      />

      <CreateNoteForm
        folders={folders}
      />

      <NotesGrid notes={notes} />
    </DashboardLayout>
  );
}