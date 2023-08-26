export default function FavouritesBtn({
  catInfo,
  favouritesIds,
  addToFavourites,
  deleteFromFavourites,
}) {
  const isFavourites = favouritesIds
    .map((el) => el.image_id)
    .includes(catInfo.id);

  const catForDel = favouritesIds.filter((el) => el.image_id === catInfo.id);

  return (
    <button
      type="button"
      onClick={
        isFavourites
          ? () => deleteFromFavourites(catForDel[0].id)
          : () => addToFavourites(catInfo.id)
      }
    >
      {isFavourites ? "Unfav" : "Fav"}
    </button>
  );
}
