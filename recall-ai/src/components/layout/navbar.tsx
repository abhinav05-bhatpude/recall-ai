export function Navbar() {
  return (
    <header className="border-b px-6 py-4">
      <div className="flex items-center justify-between">
        <input
          type="text"
          placeholder="Search notes..."
          className="border rounded-md px-3 py-2"
        />

        <div className="h-10 w-10 rounded-full bg-gray-300" />
      </div>
    </header>
  );
}