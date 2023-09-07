import { getAllVotes } from "@/utils/api";
import { useCallback, useState } from "react";

export default function useVotes() {
  const [likesCats, setLikesCats] = useState([]);
  const [dislikesCats, setDislikesCats] = useState([]);

  const fetchAllVotes = useCallback(async () => {
    const data = await getAllVotes();

    const likesCats = data.filter((el) => el.value === 1);
    setLikesCats(likesCats);

    const dislikesCats = data.filter((el) => el.value === -1);
    setDislikesCats(dislikesCats);
  }, []);

  return { likesCats, dislikesCats, fetchAllVotes };
}
