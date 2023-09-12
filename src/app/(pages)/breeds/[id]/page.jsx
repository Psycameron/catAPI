"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { getCatInfoByBreed, getCatsByBreed } from "@/utils/api";

import styles from "./page.module.css";
import Loader from "@/components/Loader/Loader";

const LIMIT_SLIDER_IMAGES = 5;

const placeholderSVG =
  "%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpath d='M140 40C128.954 40 120 48.9543 120 59.9999C120 71.0456 128.954 79.9999 140 79.9999C151.046 79.9999 160 71.0456 160 59.9999C160 48.9543 151.046 40 140 40Z' /%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 20C0 8.9543 8.9543 0 20 0H180C191.046 0 200 8.9543 200 20V180C200 181.38 199.86 182.729 199.594 184.031C199.199 185.958 198.528 187.784 197.623 189.465C194.247 195.737 187.621 200 180 200H20C8.95431 200 0 191.046 0 180V20ZM64.6564 41.8952L60 37.2387L13.3333 83.9054V20C13.3333 16.3181 16.3181 13.3333 20 13.3333H180C183.682 13.3333 186.667 16.3181 186.667 20V133.333H156.095L64.7145 41.9526C64.6953 41.9333 64.6759 41.9142 64.6564 41.8952Z' /%3E%3C/svg%3E";

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
        <Image
          className={styles.image}
          src={breedImages[0].url}
          alt={name}
          fill={true}
          sizes="640px"
          priority
          // placeholder="blur"
          // blurDataURL={placeholderSVG}
        />
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
