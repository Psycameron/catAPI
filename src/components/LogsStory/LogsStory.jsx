import Like from "public/images/svg/like.svg";
import Fav from "public/images/svg/fav.svg";
import Dislike from "public/images/svg/dislike.svg";
import styles from "./LogsStory.module.css";

export default function LogsStory({ logs }) {
  if (logs.length === 0) {
    return null;
  }

  const iconComponents = {
    "was added to Likes": <Like className={`${styles.icon} ${styles.like}`} />,
    "was added to Favourites": (
      <Fav className={`${styles.icon} ${styles.fav}`} />
    ),
    "was added to Dislikes": (
      <Dislike className={`${styles.icon} ${styles.dislike}`} />
    ),
  };

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
            {iconComponents[action]}
          </li>
        );
      })}
    </ul>
  );
}
