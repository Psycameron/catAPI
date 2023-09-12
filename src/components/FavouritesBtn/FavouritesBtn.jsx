import useFavourites from "@/hooks/useFavourites";
import styles from "./FavouritesBtn.module.css";
import Fav from "public/images/svg/fav.svg";
import Unfav from "public/images/svg/unfav.svg";

export default function FavouritesBtn({ catId, addLog }) {
  const { favouritesCats, addToFavourites, deleteFromFavourites } =
    useFavourites();

  const isFavourites = favouritesCats.map((el) => el.image_id).includes(catId);

  const catForDelete = favouritesCats.filter(
    (el) => el.image_id === catId
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
              addLog(catId, `was removed from ${e.currentTarget.name}`);
            }
          : (e) => {
              addToFavourites(catId);
              addLog(catId, `was added to ${e.currentTarget.name}`);
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
