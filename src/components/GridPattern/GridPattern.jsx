import Image from "next/image";
import styles from "./GridPattern.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function GridPattern({ cats, selectedBreedId }) {
  const pathname = usePathname();

  if (!cats) {
    return;
  }

  return (
    <ul className={styles.parent}>
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
