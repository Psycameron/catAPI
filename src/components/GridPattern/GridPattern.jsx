import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import styles from "./GridPattern.module.css";
import Unfav from "public/images/svg/unfav.svg";
import FavouritesBtn from "../FavouritesBtn/FavouritesBtn";

export default function GridPattern({
  cats,
  selectedBreedId,
  deleteFromFavourites,
  addLog,
}) {
  const pathname = usePathname();

  if (!cats) {
    return;
  }

  return (
    <ul className={styles.list}>
      {pathname === "/breeds" &&
        cats.map(({ url, id, breeds }) => (
          <li className={styles.item} key={id}>
            <div className={styles.imageContainer}>
              <Image
                className={styles.image}
                src={url}
                alt={breeds[0].name}
                fill={true}
                sizes="380px"
                priority
              />
            </div>
            <Link className={styles.link} href={`/breeds/${selectedBreedId}`}>
              <p className={styles.breedTitle}>{breeds[0].name}</p>
            </Link>
          </li>
        ))}

      {pathname === "/gallery" &&
        cats.map(({ url, id, breeds }) => (
          <li className={styles.item} key={id}>
            <div className={styles.imageContainer}>
              <Image
                className={styles.image}
                src={url}
                alt={breeds[0].name}
                fill={true}
                sizes="380px"
              />
            </div>
            {/* <FavouritesBtn catId={id} /> */}
          </li>
        ))}

      {pathname === "/favourites" &&
        cats.map(({ id, image }) => (
          <li className={styles.item} key={id}>
            <div className={styles.imageContainer}>
              <Image
                className={styles.image}
                src={image.url}
                alt={image.url}
                fill={true}
                sizes="380px"
              />
            </div>
            <button
              className={`${styles.button} ${styles.active}}`}
              type="button"
              name="Favourites"
              onClick={(e) => {
                deleteFromFavourites(id);
                addLog(image.id, `was removed from ${e.currentTarget.name}`);
              }}
            >
              <Unfav className={`${styles.icon} ${styles.unfav}`} />
            </button>
          </li>
        ))}

      {(pathname === "/likes" || pathname === "/dislikes") &&
        cats.map(({ id, image }) => (
          <li className={styles.item} key={id}>
            <Image
              className={styles.image}
              src={image.url}
              alt={image.url}
              fill={true}
              sizes="380px"
            />
          </li>
        ))}
    </ul>
  );
}
