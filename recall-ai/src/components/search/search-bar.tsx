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
    <div className="mb-8">
      <div className="relative">
        <Search
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search notes, folders or resources..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full rounded-2xl border border-white/10 bg-white/10 py-4 pl-12 pr-5 text-white placeholder:text-slate-400 backdrop-blur-xl outline-none transition-all duration-300 focus:border-emerald-400/40 focus:ring-2 focus:ring-emerald-500/20"
        />
      </div>
    </div>
  );
}