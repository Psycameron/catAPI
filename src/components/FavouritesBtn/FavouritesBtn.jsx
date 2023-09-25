import useFavourites from "@/hooks/useFavourites";
import styles from "./FavouritesBtn.module.css";
import Fav from "public/images/svg/fav.svg";
import Unfav from "public/images/svg/unfav.svg";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function FavouritesBtn({ catId, addLog }) {
  const pathname = usePathname();
  const reuse = pathname === "/gallery" || pathname === "/favourites";
  const [isFavourites, setIsFavourites] = useState(false);
  const [catForDelete, setCatForDelete] = useState(null);
  // let isFavourites = [];
  // let catForDelete;

  const {
    favouritesCats,
    fetchFavourites,
    addToFavourites,
    deleteFromFavourites,
  } = useFavourites();

  useEffect(() => {
    async function loadFavourites() {
      await fetchFavourites();
    }

    loadFavourites();
  }, [fetchFavourites]);

  useEffect(() => {
    if (pathname === "/favourites") {
      setIsFavourites(favouritesCats?.map((el) => el.id).includes(catId));
      setCatForDelete(favouritesCats?.filter((el) => el.id === catId));
    } else {
      setIsFavourites(favouritesCats?.map((el) => el.image_id).includes(catId));
      setCatForDelete(favouritesCats?.filter((el) => el.image_id === catId));
    }
  }, [catId, favouritesCats, pathname]);

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
