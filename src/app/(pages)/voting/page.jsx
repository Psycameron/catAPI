"use client";
import { useEffect, useState } from "react";
import { useFavourites } from "@/hooks/useFavourites";
import { useLogs } from "@/hooks/useLogs";
import Image from "next/image";

import LogsStory from "@/components/LogsStory/LogsStory";
import ReactionsMenu from "@/components/ReactionsMenu/ReactionsMenu";
import { addImageReaction, getRandomCat } from "@/utils/api";

import styles from "./page.module.css";

export default function Voting() {
  const [catInfo, setCatInfo] = useState(null);

  const {
    favouritesCats,
    addToFavourites,
    deleteFromFavourites,
    fetchFavourites,
  } = useFavourites();

  const { logs, addLog } = useLogs();

  useEffect(() => {
    async function fetchCat() {
      const data = await getRandomCat();
      setCatInfo(data);
    }

    fetchCat();
    fetchFavourites();
  }, [fetchFavourites]);

  if (!catInfo) {
    return;
  }

  async function loadNewCatImage() {
    const newCatInfo = await getRandomCat();
    setCatInfo(newCatInfo);
  }

  async function handleReaction(id, value) {
    const data = { image_id: id, value };

    await addImageReaction(data);

    loadNewCatImage();
  }

  return (
    <div>
      <Image
        className={styles.image}
        src={catInfo.url}
        alt={"cat"}
        width={640}
        height={360}
      />
      <ReactionsMenu
        catInfo={catInfo}
        favouritesCats={favouritesCats}
        handleReaction={handleReaction}
        addToFavourites={addToFavourites}
        deleteFromFavourites={deleteFromFavourites}
        addLog={addLog}
      />
      <LogsStory logs={logs} />
    </div>
  );
}
