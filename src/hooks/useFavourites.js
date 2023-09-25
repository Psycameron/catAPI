import { useCallback, useState } from "react";
import {
  addCatToFavourites,
  deleteCatFromFavourites,
  getFavourites,
} from "@/utils/api";

export default function useFavourites() {
  const [favouritesCats, setFavouritesCats] = useState([]);

  const fetchFavourites = useCallback(async () => {
    const data = await getFavourites();
    setFavouritesCats(data);
  }, []);

  const addToFavourites = useCallback(
    async (id) => {
      const data = { image_id: id };

      const res = await addCatToFavourites(data);
      setFavouritesCats((prevFavouritesCats) => [
        ...prevFavouritesCats,
        res.id,
      ]);

      fetchFavourites();
    },
    [fetchFavourites]
  );

  const deleteFromFavourites = useCallback(
    async (imageId) => {
      await deleteCatFromFavourites(imageId);
      setFavouritesCats((prevFavouritesCats) =>
        prevFavouritesCats.filter((el) => el.image_id !== imageId)
      );
      fetchFavourites();
    },
    [fetchFavourites]
  );

  return {
    favouritesCats,
    setFavouritesCats,
    addToFavourites,
    deleteFromFavourites,
    fetchFavourites,
  };
}
