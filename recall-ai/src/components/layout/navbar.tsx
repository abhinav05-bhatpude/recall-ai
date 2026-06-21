import { LogoutButton } from "@/components/auth/logout-button";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b p-4">
      <h1 className="text-xl font-bold">
        RecallAI
      </h1>

      <LogoutButton />
    </nav>
  );
}