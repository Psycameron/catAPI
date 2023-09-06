import Image from "next/image";
import styles from "./GridPattern.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function GridPattern({ cats, selectedBreedId }) {
  const pathname = usePathname();
  console.log(`🚀 ~ GridPattern ~ pathname:`, pathname);

  if (!cats) {
    return;
  }

  return (
    <ul className={styles.parent}>
      {pathname === "/breeds" || pathname === "/gallery"
        ? cats.map(({ url, id, breeds }) => {
            return (
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
            );
          })
        : cats.map(({ id, image }) => {
            return (
              <li className={styles.item} key={id}>
                <Image
                  className={styles.image}
                  src={image.url}
                  alt={image.url}
                  width={310}
                  height={310}
                />
              </li>
            );
          })}
    </ul>
  );
}
