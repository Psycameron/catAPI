"use client";

import { useSearch } from "@/contexts/searchContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Search() {
  const router = useRouter();
  const { query, breeds, breedIds, limit, setQuery, setBreedIds, setLimit } =
    useSearch();
  console.log(`🚀 ~ Search ~ query:`, query);
  console.log(`🚀 ~ Search ~ breedIds:`, breedIds);
  console.log(`🚀 ~ Search ~ breeds:`, breeds);

  return (
    <div>
      <p>
        Search results for: <span>{query}</span>
      </p>
    </div>
  );
}
