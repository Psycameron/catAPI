"use client";

import { useEffect, useState } from "react";
import { getAllBreeds } from "@/utils/api";

export default function useBreeds() {
  const [breeds, setBreeds] = useState(null);
  const [allBreedIds, setAllBreedIds] = useState(null);

  useEffect(() => {
    async function loadBreeds() {
      const data = await getAllBreeds();
      setBreeds(data);
    }

    loadBreeds();
  }, []);

  useEffect(() => {
    if (!breeds) {
      return;
    }

    const breedIdsList = breeds.map((el) => el.id).join();
    setAllBreedIds(breedIdsList);
  }, [breeds]);

  return { breeds, allBreedIds };
}
