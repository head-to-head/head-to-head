"use client";

import { useState } from "react";

export default function TeamInput({ placeholder }: { placeholder: string }) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const fetchSuggestions = async (input: string) => {
    if (input.length > 1) {
      const res = await fetch(`/api/suggestions?q=${input}`);
      const data = await res.json();
      setSuggestions(data.suggestions);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        className="border p-2 rounded w-40"
        placeholder={placeholder}
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          fetchSuggestions(e.target.value);
        }}
      />
      {suggestions.length > 0 && (
        <ul className="absolute bg-white border w-40 mt-1">
          {suggestions.map((s, i) => (
            <li key={i} className="p-1 hover:bg-gray-200 cursor-pointer">
              {s}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
