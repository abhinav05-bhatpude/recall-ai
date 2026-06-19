import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Navbar } from "@/components/layout/navbar";
import { Sidebar } from "@/components/layout/sidebar";

import { FolderList } from "@/components/folders/folder-list";
import { NotesGrid } from "@/components/notes/notes-grid";

import {
  folders,
  notes,
} from "@/constants/mock-data";

export default function DashboardPage() {
  return (
    <DashboardLayout
      navbar={<Navbar />}
      sidebar={<Sidebar />}
    >
      <FolderList folders={folders} />

      <NotesGrid notes={notes} />
    </DashboardLayout>
  );
}