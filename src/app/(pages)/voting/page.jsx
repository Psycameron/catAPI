"use client";
import { useEffect, useState } from "react";
import useFavourites from "@/hooks/useFavourites";
import useLogs from "@/hooks/useLogs";
import Image from "next/image";

import LogsStory from "@/components/LogsStory/LogsStory";
import ReactionsMenu from "@/components/ReactionsMenu/ReactionsMenu";
import { addImageReaction, getRandomCat } from "@/utils/api";

import styles from "./page.module.css";
import Loader from "@/components/Loader/Loader";

export default function Voting() {
  const {
    favouritesCats,
    fetchFavourites,
    addToFavourites,
    deleteFromFavourites,
  } = useFavourites();
  const { logs, addLog } = useLogs();

  const [catInfo, setCatInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function fetchCat() {
      const data = await getRandomCat();
      setCatInfo(data);
      setIsLoading(false);
    }
    fetchFavourites();
    fetchCat();
  }, [fetchFavourites]);

  async function loadNewCatImage() {
    const newCatInfo = await getRandomCat();
    setCatInfo(newCatInfo);
    setIsLoading(false);
  }

  async function handleReaction(id, value) {
    const data = { image_id: id, value };
    setIsLoading(true);

    await addImageReaction(data);

    loadNewCatImage();
  }

  if (!catInfo) {
    return;
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={catInfo.url}
            alt={"cat"}
            fill={true}
            sizes="640px"
            priority
          />
        </div>
      )}
      <ReactionsMenu
        catId={catInfo.id}
        handleReaction={handleReaction}
        favouritesCats={favouritesCats}
        addToFavourites={addToFavourites}
        deleteFromFavourites={deleteFromFavourites}
        addLog={addLog}
      />
      <LogsStory logs={logs} />
    </>
  );
}
