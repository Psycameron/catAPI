"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import LogsStory from "@/components/LogsStory/LogsStory";
import ReactionsMenu from "@/components/ReactionsMenu/ReactionsMenu";
import { useFavourites } from "@/hooks/useFavourites";
import { addImageReaction, getRandomCat } from "@/utils/api";

import styles from "./page.module.css";

export default function Voting() {
  const [catInfo, setCatInfo] = useState(null);
  const [logs, setLogs] = useState([]);

  const {
    favouritesCats,
    addToFavourites,
    deleteFromFavourites,
    fetchFavourites,
  } = useFavourites();

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

  function addLog(id, message) {
    const log = {
      date: formatTime(new Date()),
      id,
      action: message,
    };

    setLogs((prevLogs) => [log, ...prevLogs]);
  }

  function formatTime(date) {
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${formattedHours}:${formattedMinutes}`;
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
