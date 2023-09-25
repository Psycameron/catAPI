"use client";

import GalleryForm from "@/components/GalleryForm/GalleryForm";
import GridPattern from "@/components/GridPattern/GridPattern";
import Loader from "@/components/Loader/Loader";
import useBreeds from "@/hooks/useBreeds";
import useFavourites from "@/hooks/useFavourites";
import useLogs from "@/hooks/useLogs";
import { getCatsForGallery, getCatsWithBreed } from "@/utils/api";
import { useEffect, useState } from "react";

export default function Gallery() {
  const { breeds, allBreedIds } = useBreeds();
  const { logs, addLog } = useLogs();
  const { favouritesCats, addToFavourites, deleteFromFavourites } =
    useFavourites();

  const [cats, setCats] = useState(null);

  const [selectedOrder, setSelectedOrder] = useState("RANDOM");
  const [selectedType, setSelectedType] = useState("gif,png,jpeg");
  const [selectedBreedId, setSelectedBreedId] = useState(allBreedIds);
  const [selectedLimit, setSelectedLimit] = useState(10);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (breeds) {
      setSelectedBreedId(allBreedIds);
    }
  }, [allBreedIds, breeds]);

  useEffect(() => {
    if (!cats) {
      setIsLoading(true);
      async function fetchData() {
        const data = await getCatsWithBreed(selectedLimit);

        setCats(data);
        setIsLoading(false);
      }

      fetchData();
    }
  }, [cats, selectedLimit]);

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

  function handleSubmit(e) {
    e.preventDefault();

    if (selectedBreedId === allBreedIds) {
      setIsLoading(true);

      async function fetchData() {
        const data = await getCatsForGallery(
          selectedOrder,
          selectedType,
          "",
          selectedLimit
        );
        setCats(data);
        setIsLoading(false);
      }

      fetchData();
    } else {
      setIsLoading(true);

      async function fetchData() {
        const data = await getCatsForGallery(
          selectedOrder,
          selectedType,
          selectedBreedId,
          selectedLimit
        );
        setCats(data);
        setIsLoading(false);
      }

      fetchData();
    }
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  }

  if (!breeds) {
    return;
  }

  return (
    <>
      <GalleryForm
        breeds={breeds}
        allBreedIds={allBreedIds}
        handleSelectChange={handleSelectChange}
        selectedOrder={selectedOrder}
        selectedType={selectedType}
        selectedBreedId={selectedBreedId}
        selectedLimit={selectedLimit}
        handleSubmit={handleSubmit}
        handleKeyPress={handleKeyPress}
      />
      {isLoading ? (
        <Loader />
      ) : (
        <GridPattern
          cats={cats}
          addLog={addLog}
          favouritesCats={favouritesCats}
          addToFavourites={addToFavourites}
          deleteFromFavourites={deleteFromFavourites}
        />
      )}
    </>
  );
}
