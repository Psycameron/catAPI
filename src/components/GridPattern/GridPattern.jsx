import styles from "./GridPattern.module.css";

export default function GridPattern() {
  return (
    <div className={styles.parent}>
      <div className={`${styles.item} ${styles.item1}`}>1</div>
      <div className={`${styles.item} ${styles.item2}`}>2</div>
      <div className={`${styles.item} ${styles.item3}`}>3</div>
      <div className={`${styles.item} ${styles.item4}`}>4</div>
      <div className={`${styles.item} ${styles.item5}`}>5</div>
    </div>
  );
}
