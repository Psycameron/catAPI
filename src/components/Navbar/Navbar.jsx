"use client";

import Link from "next/link";

import Image from "next/image";

import voteTable from "/public/images/vote-table.png";
import petBreeds from "/public/images/pet-breeds.png";
import imageSearch from "/public/images/images-search.png";

import styles from "./Navbar.module.css";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <p className={styles.descr}>Lets start using The Cat API</p>
      <nav className={styles.nav}>
        <Link className={styles.link} href="/voting">
          <div
            className={`${styles.wrapper} ${styles.voting} ${
              pathname === "/voting" ? `${styles.active}` : ""
            }`}
          >
            <Image
              className={styles.img}
              src={voteTable}
              alt="voting"
              width={100}
              height={124}
            />
          </div>
          <p
            className={`${styles.p} ${
              pathname === "/voting" ? `${styles.active}` : ""
            }`}
          >
            VOTING
          </p>
        </Link>
        <Link className={styles.link} href="/breeds">
          <div
            className={`${styles.wrapper} ${styles.breeds} ${
              pathname === "/breeds" ? `${styles.active}` : ""
            }`}
          >
            <Image
              className={styles.img}
              src={petBreeds}
              alt="breeds"
              width={117}
              height={163}
            />
          </div>

          <p
            className={`${styles.p} ${
              pathname === "/breeds" ? `${styles.active}` : ""
            }`}
          >
            BREEDS
          </p>
        </Link>
        <Link className={styles.link} href="/gallery">
          <div
            className={`${styles.wrapper} ${styles.gallery} ${
              pathname === "/gallery" ? `${styles.active}` : ""
            }`}
          >
            <Image
              className={styles.img}
              src={imageSearch}
              alt="gallery"
              width={112}
              height={190}
            />
          </div>
          <p
            className={`${styles.p} ${
              pathname === "/gallery" ? `${styles.active}` : ""
            }`}
          >
            GALLERY
          </p>
        </Link>
      </nav>
    </>
  );
}
