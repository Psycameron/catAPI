"use client";

import { useEffect, useState } from "react";
import useBreeds from "@/hooks/useBreeds";
import { getCatsByBreed } from "@/utils/api";

import BreedsFilter from "@/components/BreedsFilter/BreedsFilter";
import GridPattern from "@/components/GridPattern/GridPattern";

export default function Breeds() {
  const { breeds, allBreedIds } = useBreeds();

  const [cats, setCats] = useState(null);
  const [selectedBreedId, setSelectedBreedId] = useState(allBreedIds);
  console.log(`🚀 ~ Breeds ~ selectedBreedId:`, selectedBreedId);
  const [selectedLimit, setSelectedLimit] = useState(10);

  useEffect(() => {
    if (breeds) {
      setSelectedBreedId(allBreedIds);
    }
  }, [allBreedIds, breeds]);

  useEffect(() => {
    async function fetchData() {
      const data = await getCatsByBreed(selectedBreedId, selectedLimit);

      setCats(data);
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
      <GridPattern cats={cats} selectedBreedId={selectedBreedId} />
    </>
  );
}
