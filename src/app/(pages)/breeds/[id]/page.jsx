"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { getCatInfoByBreed, getCatsByBreed } from "@/utils/api";

const LIMIT_SLIDER_IMAGES = 5;

export default function PetInfo({ params: { id } }) {
  const [breedInfo, setBreedInfo] = useState(null);
  const [breedImages, setBreedImages] = useState([]);

  useEffect(() => {
    async function fetchDataBreed() {
      const data = await getCatInfoByBreed(id);
      setBreedInfo(data);
    }

    async function fetchDataImages() {
      const data = await getCatsByBreed(id, LIMIT_SLIDER_IMAGES);
      const dataImages = data.map(({ id, url }) => ({
        id,
        url,
      }));
      setBreedImages(dataImages);
    }

    fetchDataBreed();
    fetchDataImages();
  }, [id]);

  if (!breedInfo) {
    return;
  }

  const { name, temperament, origin, weight, life_span, description } =
    breedInfo;

  return (
    <div>
      <h3>{id}</h3>
      {breedImages.map(({ url, id }) => {
        return <Image key={id} src={url} alt={name} width={320} height={320} />;
      })}
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <ul>
          <li>Temperament: {temperament}</li>
          <li>Origin:{origin}</li>
          <li>Weight:{weight.metric}</li>
          <li>Life span:{life_span}</li>
        </ul>
      </div>
    </div>
  );
}
