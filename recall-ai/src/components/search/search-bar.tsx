"use client";

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(
    searchParams.get("search") || ""
  );

  function handleSearch(
    e: React.FormEvent
  ) {
    e.preventDefault();

    const params =
      new URLSearchParams(searchParams);

    if (search.trim()) {
      params.set("search", search);
    } else {
      params.delete("search");
    }

    router.push(
      `/dashboard?${params.toString()}`
    );
  }

  return (
    <form
      onSubmit={handleSearch}
      className="mb-6"
    >
      <div className="relative">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          placeholder="Search notes..."
          className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 outline-none transition focus:border-black"
        />
      </div>
    </form>
  );
}