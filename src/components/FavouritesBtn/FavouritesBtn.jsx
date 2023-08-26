export default function FavouritesBtn({
  catInfo,
  favouritesIds,
  addToFavourites,
  deleteFromFavourites,
}) {
  console.log(`🚀 ~ catInfo:`, catInfo);
  const isFavourites = favouritesIds
    .map((el) => el.image_id)
    .includes(catInfo.id);
  console.log(`🚀 ~ isFavourites:`, isFavourites);

  const catForDel = favouritesIds.filter((el) => el.image_id === catInfo.id);
  console.log(`🚀 ~ catForDel:`, catForDel);

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
