import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import FavouritesBtn from "../FavouritesBtn/FavouritesBtn";
import styles from "./GridPattern.module.css";

export default function GridPattern({
  cats,
  addToFavourites,
  deleteFromFavourites,
  favouritesCats,
  addLog,
}) {
  const pathname = usePathname();

  if (!cats) {
    return;
  }

  return (
    <ul className={`${styles.list} ${styles.favourites}`}>
      {(pathname === "/breeds" || pathname === "/search") &&
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
            <Link className={styles.link} href={`/breeds/${breeds[0].id}`}>
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
                alt={breeds[0]?.name || id}
                fill={true}
                sizes="380px"
              />
            </div>
            <FavouritesBtn
              catId={id}
              addLog={addLog}
              favouritesCats={favouritesCats}
              addToFavourites={addToFavourites}
              deleteFromFavourites={deleteFromFavourites}
            />
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
            <FavouritesBtn
              catId={id}
              addLog={addLog}
              favouritesCats={cats}
              deleteFromFavourites={deleteFromFavourites}
            />
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
