"use client";

import { useEffect, useState } from "react";
import { getCatInfoByBreed, getCatsByBreed } from "@/utils/api";

import Slider from "@/components/Slider/Slider";
import Loader from "@/components/Loader/Loader";
import styles from "./page.module.css";

const LIMIT_SLIDER_IMAGES = 5;

export default function PetInfo({ params: { id } }) {
  const [breedInfo, setBreedInfo] = useState(null);
  const [breedImages, setBreedImages] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
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
      setIsLoading(false);
    }

    fetchDataBreed();
    fetchDataImages();
  }, [id]);

  if (!breedInfo || !breedImages) {
    return;
  }

  const { name, temperament, origin, weight, life_span, description } =
    breedInfo;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.imageContainer}>
          <Slider images={breedImages} />
        </div>
      )}

      <div className={styles.container}>
        <h4 className={styles.name}>{name}</h4>
        <p className={styles.descr}>{description}</p>
        <ul className={styles.params}>
          <li className={`${styles.item} ${styles.temperament}`}>
            <span className={styles.category}>Temperament: </span>
            <span className={styles.span}>{temperament}</span>
          </li>
          <div className={styles.wrapper}>
            <li className={styles.item}>
              <span className={styles.category}>Origin: </span>
              <span className={styles.span}>{origin}</span>
            </li>
            <li className={styles.item}>
              <span className={styles.category}>Weight: </span>
              <span className={styles.span}>{weight?.metric}</span>
            </li>
            <li className={styles.item}>
              <span className={styles.category}>Life span: </span>
              <span className={styles.span}>{life_span}</span>
            </li>
          </div>
        </ul>
      </div>
    </>
  );
}
