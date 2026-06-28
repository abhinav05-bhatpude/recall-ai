"use client";

import {
  useRouter,
  useSearchParams,
} from "next/navigation";

import { useState } from "react";

export function SearchBar() {
  const router = useRouter();

  const searchParams =
    useSearchParams();

  const [search, setSearch] =
    useState(
      searchParams.get("search") ?? ""
    );

  function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    const params =
      new URLSearchParams(
        searchParams.toString()
      );

    if (search.trim()) {
      params.set(
        "search",
        search.trim()
      );
    } else {
      params.delete("search");
    }

    router.push(
      `/dashboard?${params.toString()}`
    );
  }

  function clearSearch() {
    setSearch("");

    const params =
      new URLSearchParams(
        searchParams.toString()
      );

    params.delete("search");

    router.push(
      `/dashboard?${params.toString()}`
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 flex gap-2"
    >
      <input
        type="text"
        placeholder="Search notes..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="flex-1 rounded-lg border p-3 outline-none focus:ring-2 focus:ring-black"
      />

      <button
        type="submit"
        className="rounded-lg bg-black px-5 text-white"
      >
        Search
      </button>

      <button
        type="button"
        onClick={clearSearch}
        className="rounded-lg border px-5"
      >
        Clear
      </button>
    </form>
  );
}