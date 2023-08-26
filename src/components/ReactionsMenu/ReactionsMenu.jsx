import { addImageToLikes } from "@/utils/api";

export default function ReactionsMenu({ catInfo }) {
  console.log(`🚀 ~ ReactionsMenu ~ catInfo:`, catInfo);

  function addToLikes() {
    async function fetchData() {
      const data = { image_id: catInfo.id, value: 1 };

      await addImageToLikes(data);
    }
    fetchData();
  }

  return (
    <div>
      <button type="button" onClick={() => addToLikes()}>
        Likes
      </button>
      <button type="button">Fav</button>
      <button type="button">Dislikes</button>
    </div>
  );
}
