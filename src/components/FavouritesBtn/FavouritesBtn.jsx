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
      {isFavourites ? "Unfav" : "Fav"}
    </button>
  );
}
