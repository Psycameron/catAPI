"use client";

import { useEffect, useState } from "react";

import { getAllBreeds } from "@/utils/api";

import BreedsFilter from "@/components/BreedsFilter/BreedsFilter";
import GridPattern from "@/components/GridPattern/GridPattern";

export default function Breeds() {
  const [breeds, setBreeds] = useState(null);
  const [selectedLimit, setSelectedLimit] = useState("10");
  const [selectedBreed, setSelectedBreed] = useState("default");

  useEffect(() => {
    async function fetchData() {
      const data = await getAllBreeds();
      setBreeds(data);
    }

    fetchData();
  }, []);

  if (!breeds) {
    return;
  }

  function handleSelectChange(e) {
    if (e.target.name === "breeds") {
      setSelectedBreed(e.target.value);
    }
    if (e.target.name === "limits") {
      setSelectedLimit(e.target.value);
    }
  }

  return (
    <>
      <div>Breeds Page</div>
      <BreedsFilter
        breeds={breeds}
        selectedLimit={selectedLimit}
        selectedBreed={selectedBreed}
        handleSelectChange={handleSelectChange}
      />
      <GridPattern />
    </>
  );
}
