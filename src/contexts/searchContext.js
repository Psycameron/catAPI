"use client";

import { createContext, useContext, useEffect, useState } from "react";
import useBreeds from "@/hooks/useBreeds";

const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);

export default function SearchProvider({ children }) {
  const { breeds } = useBreeds();

  const [cats, setCats] = useState(null);
  const [query, setQuery] = useState("");
  const [breedIds, setBreedIds] = useState(null);

  useEffect(() => {
    function searchBreedIds(query) {
      if (!breeds) {
        return null;
      }

      const exactMatches = breeds.filter(
        (breed) => breed.name.toLowerCase() === query.toLowerCase().trim()
      );
      const similarMatches = breeds.filter(
        (breed) =>
          breed.name.toLowerCase().includes(query.toLowerCase().trim()) &&
          breed.name !== query.toLowerCase().trim()
      );

      const sortedResults = exactMatches.concat(similarMatches);
      const sortedIds = sortedResults.map((el) => el.id).join();

      if (sortedIds.length === 0) {
        setBreedIds(null);
      } else {
        setBreedIds(sortedIds);
      }
    }

    searchBreedIds(query);
  }, [breeds, query]);

  return (
    <SearchContext.Provider
      value={{
        query,
        cats,
        breeds,
        breedIds,
        setQuery,
        setBreedIds,
        setCats,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
