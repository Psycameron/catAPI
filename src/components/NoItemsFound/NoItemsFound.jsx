import styles from "./NoItemsFound.module.css";

export default function NoItemsFound() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>No items found</p>
    </div>
  );
}
