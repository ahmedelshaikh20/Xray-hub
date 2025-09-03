"use client";
import { useEffect, useState } from "react";

type Props = {
  placeholder?: string;
  initialQuery?: string;
  onSearch: (q: string) => void;
  debounceMs?: number;
  className?: string;
};

export default function SearchBar({
  placeholder = "Search (description, tags, diagnosis)…",
  initialQuery = "",
  onSearch,
  debounceMs = 300,
  className = "",
}: Props) {
  const [q, setQ] = useState(initialQuery);

  useEffect(() => {
    const id = setTimeout(() => onSearch(q.trim()), debounceMs);
    return () => clearTimeout(id);
  }, [q, onSearch, debounceMs]);

  const submit = (e?: React.FormEvent) => {
    e?.preventDefault();
    onSearch(q.trim());
  };

  const clear = () => {
    setQ("");
    onSearch("");
  };

  return (
    <form onSubmit={submit} className={`flex items-center gap-2 ${className}`}>
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder={placeholder}
        className="w-full border border-black text-black placeholder:text-gray-500 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-3 py-2 rounded-lg border border-black text-black hover:bg-gray-50"
      >
        Search
      </button>
      <button
        type="button"
        onClick={clear}
        className="px-3 py-2 rounded-lg border border-black text-black hover:bg-gray-50"
      >
        Clear
      </button>
    </form>
  );
}
