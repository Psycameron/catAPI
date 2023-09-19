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
  const [limit, setLimit] = useState(null);

  useEffect(() => {
    function searchBreedIds(query) {
      if (!breeds) {
        return null;
      }

      const exactMatches = breeds.filter(
        (breed) => breed.name === query.toLowerCase()
      );
      const similarMatches = breeds.filter(
        (breed) =>
          breed.name.toLowerCase().includes(query.toLowerCase()) &&
          breed.name !== query.toLowerCase()
      );

      const sortedResults = exactMatches.concat(similarMatches);
      const sortedIds = sortedResults.map((el) => el.id).join();

      setBreedIds(sortedIds);
      setLimit(sortedResults.length);
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
        limit,
        setQuery,
        setBreedIds,
        setLimit,
        setCats,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
