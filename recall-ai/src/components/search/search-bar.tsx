"use client";

import { Search } from "lucide-react";
import {
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import {
  useEffect,
  useState,
} from "react";

export function SearchBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(
    searchParams.get("search") || ""
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      const params = new URLSearchParams(
        searchParams.toString()
      );

      const currentSearch =
        searchParams.get("search") || "";

      // Don't navigate if nothing changed
      if (currentSearch === search.trim()) {
        return;
      }

      if (search.trim()) {
        params.set("search", search.trim());
      } else {
        params.delete("search");
      }

      router.replace(
        `${pathname}?${params.toString()}`
      );
    }, 400);

    return () => clearTimeout(timeout);
  }, [search, pathname, router]);

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