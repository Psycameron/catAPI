"use client";

import { useEffect, useState } from "react";
import useBreeds from "@/hooks/useBreeds";
import { getCatsByBreed } from "@/utils/api";

import BreedsFilter from "@/components/BreedsFilter/BreedsFilter";
import GridPattern from "@/components/GridPattern/GridPattern";

export default function Breeds() {
  const { breeds } = useBreeds();

  const [cats, setCats] = useState(null);
  const [selectedLimit, setSelectedLimit] = useState(10);
  const [selectedBreedId, setSelectedBreedId] = useState("default");

  useEffect(() => {
    async function fetchData() {
      const data = await getCatsByBreed(selectedBreedId, selectedLimit);

      setCats(data);
    }

    fetchData();
  }, [selectedBreedId, selectedLimit]);

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
        selectedLimit={selectedLimit}
        selectedBreedId={selectedBreedId}
        handleSelectChange={handleSelectChange}
      />
      <GridPattern cats={cats} selectedBreedId={selectedBreedId} />
    </>
  );
}
