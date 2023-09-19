"use client";

import GridPattern from "@/components/GridPattern/GridPattern";
import { useSearch } from "@/contexts/searchContext";

export default function Search() {
  const { query, cats, setQuery } = useSearch();

  return (
    <div>
      <p>
        Search results for: <span>{query}</span>
      </p>
      <GridPattern cats={cats} />
    </div>
  );
}
