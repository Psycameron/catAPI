import Link from "next/link";

import Image from "next/image";

import voteTable from "/public/images/vote-table.png";
import petBreeds from "/public/images/pet-breeds.png";
import imageSearch from "/public/images/images-search.png";

import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <>
      <p className={styles.descr}>Lets start using The Cat API</p>
      <nav className={styles.nav}>
        <Link className={styles.link} href="/voting">
          <div className={styles.wrapper}>
            <Image
              className={styles.img}
              src={voteTable}
              alt="voting"
              width={100}
              height={124}
            />
          </div>
          <span className={styles.span}>Voting</span>
        </Link>
        <Link className={styles.link} href="/breeds">
          <div className={styles.wrapper}>
            <Image
              className={styles.img}
              src={petBreeds}
              alt="breeds"
              width={117}
              height={163}
            />
          </div>

          <span className={styles.span}>Breeds</span>
        </Link>
        <Link className={styles.link} href="/gallery">
          <div className={styles.wrapper}>
            <Image
              className={styles.img}
              src={imageSearch}
              alt="gallery"
              width={112}
              height={190}
            />
          </div>
          <span className={styles.span}>Gallery</span>
        </Link>
      </nav>
    </>
  );
}
