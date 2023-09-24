import useFavourites from "@/hooks/useFavourites";
import styles from "./FavouritesBtn.module.css";
import Fav from "public/images/svg/fav.svg";
import Unfav from "public/images/svg/unfav.svg";
import { usePathname } from "next/navigation";

export default function FavouritesBtn({ catId, addLog }) {
  console.log(`🚀 ~ FavouritesBtn ~ className:`, styles.button);
  const pathname = usePathname();
  const reuse = pathname === "/gallery" || pathname === "favourites";
  console.log(`🚀 ~ FavouritesBtn ~ reuse:`, reuse);

  const { favouritesCats, addToFavourites, deleteFromFavourites } =
    useFavourites();

  const isFavourites = favouritesCats.map((el) => el.image_id).includes(catId);

  const catForDelete = favouritesCats.filter((el) => el.image_id === catId);

  return (
    <button
      className={`${styles.button} ${isFavourites ? styles.active : ""} ${
        reuse ? styles.reuse : ""
      }`}
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
        <Fav
          className={`${styles.icon} ${styles.fav} ${
            reuse ? styles.reuse : ""
          } `}
        />
      ) : (
        <Unfav
          className={`${styles.icon} ${styles.unfav} ${
            reuse ? styles.reuse : ""
          } `}
        />
      )}
    </button>
  );
}
