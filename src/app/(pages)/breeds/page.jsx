"use client";

import { useEffect, useState } from "react";
import { getCatsByBreed } from "@/utils/api";

import useBreeds from "@/hooks/useBreeds";

import BreedsFilter from "@/components/BreedsFilter/BreedsFilter";
import GridPattern from "@/components/GridPattern/GridPattern";
import Loader from "@/components/Loader/Loader";

export default function Breeds() {
  const { breeds, allBreedIds } = useBreeds();

  const [cats, setCats] = useState(null);
  const [selectedBreedId, setSelectedBreedId] = useState(allBreedIds);
  const [selectedLimit, setSelectedLimit] = useState(10);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (breeds) {
      setSelectedBreedId(allBreedIds);
    }
  }, [allBreedIds, breeds]);

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      const data = await getCatsByBreed(selectedBreedId, selectedLimit);

      setCats(data);
      setIsLoading(false);
    }

    fetchData();
  }, [selectedBreedId, selectedLimit, setCats]);

  function handleSort(sortedType) {
    const sortedArray = [...cats];

    if (sortedType === "ascending") {
      sortedArray.sort((a, b) => a.id.localeCompare(b.id));
    } else if (sortedType === "descending") {
      sortedArray.sort((a, b) => b.id.localeCompare(a.id));
    }

    setCats(sortedArray);
  }

  if (!breeds) {
    return;
  }

  function handleSelectChange(e) {
    if (e.target.name === "breeds") {
      setSelectedBreedId(e.target.value);
    }
    if (e.target.name === "limits") {
      setSelectedLimit(e.target.value);
    }
  }

  return (
    <>
      <BreedsFilter
        breeds={breeds}
        allBreedIds={allBreedIds}
        selectedLimit={selectedLimit}
        selectedBreedId={selectedBreedId}
        handleSelectChange={handleSelectChange}
        handleSort={handleSort}
      />
      {isLoading ? (
        <Loader />
      ) : (
        <GridPattern cats={cats} selectedBreedId={selectedBreedId} />
      )}
    </>
  );
}
