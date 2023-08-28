"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { getCatInfoByBreed, getCatsByBreed } from "@/utils/api";

import styles from "./page.module.css";

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
      <Image
        className={styles.image}
        src={breedImages[0].url}
        alt={name}
        width={640}
        height={360}
      />
      <div className={styles.container}>
        <h4 className={styles.name}>{name}</h4>
        <p className={styles.descr}>{description}</p>
        <ul className={styles.list}>
          <li className={`${styles.item} ${styles.temperament}`}>
            Temperament: <span className={styles.span}>{temperament}</span>
          </li>
          <div className={styles.wrapper}>
            <li className={styles.item}>
              Origin: <span className={styles.span}>{origin}</span>
            </li>
            <li className={styles.item}>
              Weight: <span className={styles.span}>{weight.metric}</span>
            </li>
            <li className={styles.item}>
              Life span: <span className={styles.span}>{life_span}</span>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}
