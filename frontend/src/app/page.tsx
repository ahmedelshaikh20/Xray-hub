"use client";
import { useState } from "react";
import SearchBar from "@/app/components/SearchBar";

export default function HomePage() {
  const [query, setQuery] = useState("");

  const handleSearch = (q: string) => {
    setQuery(q);
    // 🔜 Later: fetch scans from Django API with ?search=q
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-6">
      <h1 className="text-4xl font-bold text-blue-600">Orydex X-Ray Search</h1>
      <p className="mt-4 text-lg text-gray-700">
        🚀 Search through medical scans with ease
      </p>

      {/* Search Bar */}
      <div className="mt-8 w-full max-w-xl">
        <SearchBar onSearch={handleSearch} />
      </div>

      {/* Temporary feedback */}
      <div className="mt-6 text-gray-600">
        Current query:{" "}
        <span className="font-mono text-blue-600">{query || "—"}</span>
      </div>

      {/* Test button (kept from before) */}
      <button
        onClick={() => alert("Button clicked!")}
        className="mt-8 px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
      >
        Test Button
      </button>
    </main>
  );
}
