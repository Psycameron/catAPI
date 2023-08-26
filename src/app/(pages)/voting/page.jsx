"use client";

import LogsStory from "@/components/LogsStory/LogsStory";
import ReactionsMenu from "@/components/ReactionsMenu/ReactionsMenu";
import {
  addImageReaction,
  addImageToFavourites,
  deleteImageFromFavourites,
  getFavourites,
  getRandomCat,
} from "@/utils/api";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Voting() {
  const [catInfo, setCatInfo] = useState(null);
  const [favouritesIds, setFavouritesIds] = useState([]);

  useEffect(() => {
    async function fetchCat() {
      const data = await getRandomCat();
      setCatInfo(data);
    }

    fetchCat();
    fetchFavourites();
  }, []);

  if (!catInfo) {
    return;
  }

  async function handleReaction(id, value) {
    const data = { image_id: id, value };

    await addImageReaction(data);

    loadNewCatImage();
  }

  async function loadNewCatImage() {
    const newCatInfo = await getRandomCat();
    setCatInfo(newCatInfo);
  }

  async function fetchFavourites() {
    const data = await getFavourites();

    setFavouritesIds(data);
  }

  async function addToFavourites(id) {
    const data = { image_id: id };

    const res = await addImageToFavourites(data);
    favouritesIds.push(res.id);

    fetchFavourites();
  }

  async function deleteFromFavourites(id) {
    console.log(id);

    await deleteImageFromFavourites(id);
    fetchFavourites();
  }

  return (
    <div>
      <Image src={catInfo.url} alt={"cat"} width={640} height={360} />
      <ReactionsMenu
        catInfo={catInfo}
        favouritesIds={favouritesIds}
        handleReaction={handleReaction}
        addToFavourites={addToFavourites}
        deleteFromFavourites={deleteFromFavourites}
      />
      <LogsStory />
    </div>
  );
}
