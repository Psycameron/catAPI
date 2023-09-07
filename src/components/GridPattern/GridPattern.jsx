import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import styles from "./GridPattern.module.css";
import Unfav from "public/images/svg/unfav.svg";

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
            <Link href={`/breeds/${selectedBreedId}`}>
              <Image
                className={styles.image}
                src={url}
                alt={breeds[0].name}
                width={310}
                height={310}
              />
            </Link>
          </li>
        ))}

      {pathname === "/gallery" &&
        cats.map(({ url, id, breeds }) => (
          <li className={styles.item} key={id}>
            <Image
              className={styles.image}
              src={url}
              alt={breeds[0].name}
              width={310}
              height={310}
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
                width={310}
                height={310}
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
              width={310}
              height={310}
            />
          </li>
        ))}
    </ul>
  );
}
