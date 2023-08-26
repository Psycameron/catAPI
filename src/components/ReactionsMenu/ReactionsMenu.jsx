const VALUE_FOR_LIKES = 1;
const VALUE_FOR_DISLIKES = -1;

export default function ReactionsMenu({ catInfo, handleReaction }) {
  console.log(`🚀 ~ ReactionsMenu ~ catInfo:`, catInfo);

  return (
    <div>
      <button
        type="button"
        onClick={() => handleReaction(catInfo.id, VALUE_FOR_LIKES)}
      >
        Likes
      </button>
      <button type="button">Fav</button>
      <button
        type="button"
        onClick={() => handleReaction(catInfo.id, VALUE_FOR_DISLIKES)}
      >
        Dislikes
      </button>
    </div>
  );
}
