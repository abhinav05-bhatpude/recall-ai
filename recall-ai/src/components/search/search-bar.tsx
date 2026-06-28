"use client";

import {
  useRouter,
  useSearchParams,
} from "next/navigation";

export function SearchBar() {
  const router = useRouter();
  const searchParams =
    useSearchParams();

  function handleSearch(
    value: string
  ) {
    const params =
      new URLSearchParams(
        searchParams.toString()
      );

    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    router.push(
      `/dashboard?${params.toString()}`
    );
  }

  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search notes..."
        defaultValue={
          searchParams.get("search") ?? ""
        }
        onChange={(e) =>
          handleSearch(e.target.value)
        }
        className="w-full rounded-lg border p-3 outline-none focus:ring-2 focus:ring-black"
      />
    </div>
  );
}