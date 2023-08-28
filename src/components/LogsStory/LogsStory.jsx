import styles from "./LogsStory.module.css";

export default function LogsStory({ logs }) {
  if (logs.length === 0) {
    return;
  }

  return (
    <ul className={styles.list}>
      {logs.map(({ id, date, action }, index) => {
        return (
          <li className={styles.item} key={index}>
            <span className={styles.date}>{date}</span>
            <span className={styles.action}>
              Image ID: <span className={styles.id}>{id} </span>
              {action}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
