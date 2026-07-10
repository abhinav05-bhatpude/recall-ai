import { auth } from "@/auth";
import { redirect } from "next/navigation";

import {
  getFolders,
  getNotes,
  getResources,
} from "@/actions/note-actions";
import {
  demoNotes,
  demoFolders,
} from "@/lib/demo/demo-data";
import { DemoBanner } from "@/components/demo/demo-banner";
import { DemoCTA } from "@/components/demo/demo-cta";

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

 

  const {
    folder,
    search,
  } = await searchParams;

  const folders = session
  ? await getFolders()
  : demoFolders;

const notes = session
  ? await getNotes(
      folder,
      search
    )
  : demoNotes;

const resources = session
  ? await getResources()
  : [];

  const selectedFolder =
    folders.find(
      (f) => f.id === folder
    );

  return (
    <DashboardLayout
      navbar={<Navbar />}
      sidebar={<Sidebar />}

    >
      {!session && <DemoBanner />}
      <DashboardStats
        notes={notes.length}
        folders={folders.length}
        resources={resources.length}
      />

      <FolderList
        folders={folders}
      />

       <SearchBar /> 

      {session ? (
  <>
    <CreateNoteForm
      folders={folders}
    />

    <CreateResourceForm />
  </>
) : (
  <DemoCTA />
)}

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