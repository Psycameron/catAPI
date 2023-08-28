import styles from "./FavouritesBtn.module.css";
import Fav from "public/images/svg/fav.svg";
import Unfav from "public/images/svg/unfav.svg";

export default function FavouritesBtn({
  catInfo,
  favouritesIds,
  addToFavourites,
  deleteFromFavourites,
  addLog,
}) {
  const isFavourites = favouritesIds
    .map((el) => el.image_id)
    .includes(catInfo.id);

  const catForDelete = favouritesIds.filter((el) => el.image_id === catInfo.id);

  return (
    <button
      className={`${styles.button} {${isFavourites} ? ${styles.active} : ""}`}
      type="button"
      name="Favourites"
      onClick={
        isFavourites
          ? (e) => {
              deleteFromFavourites(catForDelete[0].id, e.target.name);
              addLog(catInfo.id, `was removed to ${e.target.name}`);
            }
          : (e) => {
              addToFavourites(catInfo.id, e.target.name);
              addLog(catInfo.id, `was added to ${e.target.name}`);
            }
      }
    >
      {!isFavourites ? (
        <Fav className={styles.favIcon} />
      ) : (
        <Unfav className={styles.unfavIcon} />
      )}
    </button>
  );
}
