import FavouritesBtn from "../FavouritesBtn/FavouritesBtn";

const VALUE_FOR_LIKES = 1;
const VALUE_FOR_DISLIKES = -1;

export default function ReactionsMenu({
  catInfo,
  favouritesIds,
  handleReaction,
  addToFavourites,
  deleteFromFavourites,
}) {
  // console.log(`🚀 ~ ReactionsMenu ~ catInfo:`, catInfo);

  return (
    <div>
      <button
        type="button"
        onClick={() => handleReaction(catInfo.id, VALUE_FOR_LIKES)}
      >
        Likes
      </button>
      <FavouritesBtn
        catInfo={catInfo}
        favouritesIds={favouritesIds}
        addToFavourites={addToFavourites}
        deleteFromFavourites={deleteFromFavourites}
      />
      <button
        type="button"
        onClick={() => handleReaction(catInfo.id, VALUE_FOR_DISLIKES)}
      >
        Dislikes
      </button>
    </div>
  );
}
