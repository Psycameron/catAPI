"use client";

import GalleryForm from "@/components/GalleryForm/GalleryForm";
import GridPattern from "@/components/GridPattern/GridPattern";
import { getAllBreeds, getCatsByBreed, getCatsForGallery } from "@/utils/api";
import { useEffect, useState } from "react";

export default function Gallery() {
  const [cats, setCats] = useState(null);
  console.log(`🚀 ~ Gallery ~ cats:`, cats);
  const [breeds, setBreeds] = useState(null);

  const [selectedOrder, setSelectedOrder] = useState("RANDOM");
  // console.log(`🚀 ~ Gallery ~ selectedOrder:`, selectedOrder);
  const [selectedType, setSelectedType] = useState("gif,png,jpeg");
  // console.log(`🚀 ~ Gallery ~ selectedType:`, selectedType);
  const [selectedBreedId, setSelectedBreedId] = useState("default");
  // console.log(`🚀 ~ Gallery ~ selectedBreedId:`, selectedBreedId);
  const [selectedLimit, setSelectedLimit] = useState(10);
  // console.log(`🚀 ~ Gallery ~ selectedLimit:`, selectedLimit);

  useEffect(() => {
    async function fetchDataBreeds() {
      const data = await getAllBreeds();
      setBreeds(data);
    }

    fetchDataBreeds();
  }, []);

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
