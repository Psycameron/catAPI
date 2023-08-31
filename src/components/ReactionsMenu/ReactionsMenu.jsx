import FavouritesBtn from "../FavouritesBtn/FavouritesBtn";

import styles from "./ReactionsMenu.module.css";
import Like from "public/images/svg/like.svg";
import Dislike from "public/images/svg/dislike.svg";

const VALUE_FOR_LIKES = 1;
const VALUE_FOR_DISLIKES = -1;

export default function ReactionsMenu({
  catInfo,
  favouritesIds,
  handleReaction,
  addToFavourites,
  deleteFromFavourites,
  addLog,
}) {
  return (
    <div className={styles.wrapper}>
      <button
        className={`${styles.button} ${styles.like}`}
        type="button"
        name="Likes"
        onClick={(e) => {
          handleReaction(catInfo.id, VALUE_FOR_LIKES, e.target.name);
          addLog(catInfo.id, `was added to Likes`);
        }}
      >
        <Like className={styles.icon} />
      </button>
      <FavouritesBtn
        catInfo={catInfo}
        favouritesIds={favouritesIds}
        addToFavourites={addToFavourites}
        deleteFromFavourites={deleteFromFavourites}
        addLog={addLog}
      />
      <button
        className={`${styles.button} ${styles.dislike}`}
        type="button"
        name="Dislikes"
        onClick={(e) => {
          handleReaction(catInfo.id, VALUE_FOR_DISLIKES, e.target.name);
          addLog(catInfo.id, `was added to Dislikes`);
        }}
      >
        <Dislike className={styles.icon} />
      </button>
    </div>
  );
}
