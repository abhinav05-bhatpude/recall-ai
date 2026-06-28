"use client";

import { Search } from "lucide-react";
import {
  useRouter,
  useSearchParams,
} from "next/navigation";
import {
  useEffect,
  useState,
} from "react";

export function SearchBar() {
  const router = useRouter();

  const searchParams =
    useSearchParams();

  const [search, setSearch] =
    useState(
      searchParams.get("search") || ""
    );

  useEffect(() => {
    const params =
      new URLSearchParams(
        searchParams.toString()
      );

    if (search.trim()) {
      params.set("search", search);
    } else {
      params.delete("search");
    }

    router.replace(
      `/dashboard?${params.toString()}`
    );
  }, [search]);

  return (
    <div className="mb-6">
      <div className="relative">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search notes..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 outline-none transition focus:border-black"
        />
      </div>
    </div>
  );
}