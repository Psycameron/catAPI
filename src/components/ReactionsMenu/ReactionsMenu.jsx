import FavouritesBtn from "../FavouritesBtn/FavouritesBtn";

import styles from "./ReactionsMenu.module.css";
import Like from "public/images/svg/like.svg";
import Dislike from "public/images/svg/dislike.svg";

const VALUE_FOR_LIKES = 1;
const VALUE_FOR_DISLIKES = -1;

export default function ReactionsMenu({ catId, handleReaction, addLog }) {
  return (
    <div className={styles.wrapper}>
      <button
        className={`${styles.button} ${styles.like}`}
        type="button"
        name="Likes"
        onClick={(e) => {
          handleReaction(catId, VALUE_FOR_LIKES);
          addLog(catId, `was added to ${e.currentTarget.name}`);
        }}
      >
        <Like className={styles.icon} />
      </button>

      <FavouritesBtn catId={catId} addLog={addLog} />

      <button
        className={`${styles.button} ${styles.dislike}`}
        type="button"
        name="Dislikes"
        onClick={(e) => {
          handleReaction(catId, VALUE_FOR_DISLIKES);
          addLog(catId, `was added to ${e.currentTarget.name}`);
        }}
      >
        <Dislike className={styles.icon} />
      </button>
    </div>
  );
}
