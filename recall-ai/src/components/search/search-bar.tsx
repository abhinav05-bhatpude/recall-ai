"use client";

export function SearchBar() {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search notes..."
        className="w-full rounded-lg border p-3 outline-none focus:ring-2 focus:ring-black"
      />
    </div>
  );
}