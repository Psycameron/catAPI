import FavouritesBtn from "../FavouritesBtn/FavouritesBtn";

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
  // console.log(`🚀 ~ ReactionsMenu ~ catInfo:`, catInfo);

  return (
    <div>
      <button
        type="button"
        name="Likes"
        onClick={(e) => {
          handleReaction(catInfo.id, VALUE_FOR_LIKES, e.target.name);
          addLog(catInfo.id, `was added to ${e.target.name}`);
        }}
      >
        Likes
      </button>
      <FavouritesBtn
        catInfo={catInfo}
        favouritesIds={favouritesIds}
        addToFavourites={addToFavourites}
        deleteFromFavourites={deleteFromFavourites}
        addLog={addLog}
      />
      <button
        type="button"
        name="Dislikes"
        onClick={(e) => {
          handleReaction(catInfo.id, VALUE_FOR_DISLIKES, e.target.name);
          addLog(catInfo.id, `was added to ${e.target.name}`);
        }}
      >
        Dislikes
      </button>
    </div>
  );
}
