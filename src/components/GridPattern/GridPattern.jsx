import Image from "next/image";
import styles from "./GridPattern.module.css";
import Link from "next/link";

export default function GridPattern({ cats }) {
  // console.log(`🚀 ~ GridPattern ~ cats:`, cats);

  if (!cats) {
    return;
  }

  return (
    <ul className={styles.parent}>
      {cats.map(({ url, id, breeds }) => {
        console.log(`🚀 ~ {cats.map ~ id:`, id);
        return (
          <li className={styles.item} key={id}>
            <Link href={`/breeds/${id}`}>
              <Image src={url} alt={breeds[0].name} width={320} height={320} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

// ну тут тогда по идее можешь вместо styles.item1 писать styles.${index}
// при мапе ж, и будут рендериться так же но ток сколько нужно
