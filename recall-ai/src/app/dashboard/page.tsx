import { auth } from "@/auth";
import { redirect } from "next/navigation";

import { getNotes } from "@/actions/note-actions";

import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Navbar } from "@/components/layout/navbar";
import { Sidebar } from "@/components/layout/sidebar";

import { FolderList } from "@/components/folders/folder-list";
import { NotesGrid } from "@/components/notes/notes-grid";
import { CreateNoteForm } from "@/components/notes/create-note-form";

import { folders } from "@/constants/mock-data";

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  const notes = await getNotes();

  return (
    <DashboardLayout
      navbar={<Navbar />}
      sidebar={<Sidebar />}
    >
      <FolderList folders={folders} />

      <CreateNoteForm />

      <NotesGrid notes={notes} />
    </DashboardLayout>
  );
}