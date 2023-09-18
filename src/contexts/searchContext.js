"use client";

import { getAllBreeds } from "@/utils/api";
import { createContext, useContext, useEffect, useState } from "react";

const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);

export default function SearchProvider({ children }) {
  const [breeds, setBreeds] = useState(null);
  const [query, setQuery] = useState("");
  const [breedIds, setBreedIds] = useState(null);
  const [limit, setLimit] = useState(null);

  useEffect(() => {
    async function loadBreeds() {
      const data = await getAllBreeds();
      setBreeds(data);
    }

    loadBreeds();
  }, []);

  useEffect(() => {
    function searchBreedIds(query) {
      //   if (!breeds) {
      //     return null;
      //   }

      const exactMatches = breeds?.filter(
        (breed) => breed.name === query.toLowerCase()
      );
      const similarMatches = breeds?.filter(
        (breed) =>
          breed.name.toLowerCase().includes(query.toLowerCase()) &&
          breed.name !== query.toLowerCase()
      );

      const sortedResults = exactMatches?.concat(similarMatches);
      const sortedIds = sortedResults?.map((el) => el.id).join();

      setBreedIds(sortedIds);
      setLimit(sortedResults?.length);
    }

    searchBreedIds(query);
  }, [breeds, query]);

  return (
    <SearchContext.Provider
      value={{
        query,
        breeds,
        breedIds,
        limit,
        setQuery,
        setBreedIds,
        setLimit,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
