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
  const [logs, setLogs] = useState([]);

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

  async function loadNewCatImage() {
    const newCatInfo = await getRandomCat();
    setCatInfo(newCatInfo);
  }

  async function handleReaction(id, value) {
    const data = { image_id: id, value };

    await addImageReaction(data);

    loadNewCatImage();
  }

  async function fetchFavourites() {
    const data = await getFavourites();

    setFavouritesIds(data);
  }

  async function addToFavourites(id) {
    const data = { image_id: id };

    const res = await addImageToFavourites(data);
    setFavouritesIds((prevFavouritesIds) => [...prevFavouritesIds, res.id]);

    fetchFavourites();
  }

  async function deleteFromFavourites(id) {
    await deleteImageFromFavourites(id);

    fetchFavourites();
  }

  function addLog(id, message) {
    const log = {
      date: formatTime(new Date()),
      id,
      action: message,
    };

    setLogs((prevLogs) => [...prevLogs, log]);
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
      <Image src={catInfo.url} alt={"cat"} width={640} height={360} />
      <ReactionsMenu
        catInfo={catInfo}
        favouritesIds={favouritesIds}
        handleReaction={handleReaction}
        addToFavourites={addToFavourites}
        deleteFromFavourites={deleteFromFavourites}
        addLog={addLog}
      />
      <LogsStory logs={logs} />
    </div>
  );
}
