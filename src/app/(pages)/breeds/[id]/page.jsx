"use client";

import { useEffect, useState } from "react";
import { getCatInfoByBreed, getCatsByBreed } from "@/utils/api";

import styles from "./page.module.css";
import Slider from "@/components/Slider/Slider";

const LIMIT_SLIDER_IMAGES = 5;

export default function PetInfo({ params: { id } }) {
  const [breedInfo, setBreedInfo] = useState(null);
  const [breedImages, setBreedImages] = useState(null);

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

  if (!breedInfo || !breedImages) {
    return;
  }

  const { name, temperament, origin, weight, life_span, description } =
    breedInfo;

  return (
    <div>
      <div className={styles.imageContainer}>
        <Slider images={breedImages} />
      </div>

      <div className={styles.container}>
        <h4 className={styles.name}>{name}</h4>
        <p className={styles.descr}>{description}</p>
        <ul className={styles.list}>
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
              <span className={styles.span}>{weight.metric}</span>
            </li>
            <li className={styles.item}>
              <span className={styles.category}>Life span: </span>
              <span className={styles.span}>{life_span}</span>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}
