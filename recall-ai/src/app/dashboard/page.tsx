import { auth } from "@/auth";
import { redirect } from "next/navigation";

import {
  getNotes,
  getFolders,
} from "@/actions/note-actions";

import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Navbar } from "@/components/layout/navbar";
import { Sidebar } from "@/components/layout/sidebar";

import { FolderList } from "@/components/folders/folder-list";
import { CreateFolderForm } from "@/components/folders/create-folder-form";

import { NotesGrid } from "@/components/notes/notes-grid";
import { CreateNoteForm } from "@/components/notes/create-note-form";

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  const notes = await getNotes();

  const folders =
    await getFolders();

  return (
    <DashboardLayout
      navbar={<Navbar />}
      sidebar={<Sidebar />}
    >
      <CreateFolderForm />

      <FolderList folders={folders} />

      <CreateNoteForm />

      <NotesGrid notes={notes} />
    </DashboardLayout>
  );
}