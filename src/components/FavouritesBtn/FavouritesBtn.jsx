import styles from "./FavouritesBtn.module.css";
import Fav from "public/images/svg/fav.svg";
import Unfav from "public/images/svg/unfav.svg";

export default function FavouritesBtn({
  catInfo,
  favouritesCats,
  addToFavourites,
  deleteFromFavourites,
  addLog,
}) {
  const isFavourites = favouritesCats
    .map((el) => el.image_id)
    .includes(catInfo.id);

  const catForDelete = favouritesCats.filter(
    (el) => el.image_id === catInfo.id
  );

  return (
    <button
      className={`${styles.button} {${isFavourites} ? ${styles.active} : ""}`}
      type="button"
      name="Favourites"
      onClick={
        isFavourites
          ? (e) => {
              deleteFromFavourites(catForDelete[0].id);
              addLog(catInfo.id, `was removed to ${e.currentTarget.name}`);
            }
          : (e) => {
              addToFavourites(catInfo.id);
              addLog(catInfo.id, `was added to ${e.currentTarget.name}`);
            }
      }
    >
      {!isFavourites ? (
        <Fav className={`${styles.icon} ${styles.fav}`} />
      ) : (
        <Unfav className={`${styles.icon} ${styles.unfav}`} />
      )}
    </button>
  );
}
