"use client";

import GalleryForm from "@/components/GalleryForm/GalleryForm";
import GridPattern from "@/components/GridPattern/GridPattern";
import useBreeds from "@/hooks/useBreeds";
import { getCatsForGallery } from "@/utils/api";
import { useState } from "react";

export default function Gallery() {
  const { breeds } = useBreeds();
  
  const [cats, setCats] = useState(null);

  const [selectedOrder, setSelectedOrder] = useState("RANDOM");
  const [selectedType, setSelectedType] = useState("gif,png,jpeg");
  const [selectedBreedId, setSelectedBreedId] = useState("default");
  const [selectedLimit, setSelectedLimit] = useState(10);

  if (!breeds) {
    return;
  }

  function handleSelectChange(e) {
    if (e.target.name === "order") {
      setSelectedOrder(e.target.value);
    }
    if (e.target.name === "type") {
      setSelectedType(e.target.value);
    }
    if (e.target.name === "breeds") {
      setSelectedBreedId(e.target.value);
    }
    if (e.target.name === "limits") {
      setSelectedLimit(e.target.value);
    }
  }

  function onSubmit(e) {
    e.preventDefault();

    async function fetchData() {
      const data = await getCatsForGallery(
        selectedOrder,
        selectedType,
        selectedBreedId,
        selectedLimit
      );
      setCats(data);
    }

    fetchData();
  }

  return (
    <>
      <GalleryForm
        breeds={breeds}
        handleSelectChange={handleSelectChange}
        selectedOrder={selectedOrder}
        selectedType={selectedType}
        selectedBreedId={selectedBreedId}
        selectedLimit={selectedLimit}
        onSubmit={onSubmit}
      />
      <GridPattern cats={cats} />
    </>
  );
}
