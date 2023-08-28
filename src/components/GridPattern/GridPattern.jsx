import Image from "next/image";
import styles from "./GridPattern.module.css";
import Link from "next/link";

export default function GridPattern({ cats, selectedBreedId }) {
  if (!cats) {
    return;
  }

  return (
    <ul className={styles.parent}>
      {cats.map(({ url, id, breeds }) => {
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
      })}
    </ul>
  );
}
