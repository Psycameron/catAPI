import Image from "next/image";
import styles from "./GridPattern.module.css";

export default function GridPattern({ cats }) {
  console.log(`🚀 ~ GridPattern ~ cats:`, cats);
  return (
    <div className={styles.parent}>
      {cats.map(({ url, id, breeds }) => {
        return (
          <div className={styles.item} key={id}>
            <Image src={url} alt={breeds[0].name} width={320} height={320} />
          </div>
        );
      })}
    </div>
  );
}

// ну тут тогда по идее можешь вместо styles.item1 писать styles.${index}
// при мапе ж, и будут рендериться так же но ток сколько нужно
