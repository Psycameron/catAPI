"use client";

import GridPattern from "@/components/GridPattern/GridPattern";
import LogsStory from "@/components/LogsStory/LogsStory";
import { useFavourites } from "@/hooks/useFavourites";
import { getFavourites } from "@/utils/api";
import { useEffect, useState } from "react";

export default function Favourites() {
  const [logs, setLogs] = useState([]);

  const { favouritesCats, deleteFromFavourites, setFavouritesCats } =
    useFavourites();

  useEffect(() => {
    async function fetchData() {
      const data = await getFavourites();
      console.log(`🚀 ~ fetchData ~ data:`, data);
      setFavouritesCats(data);
    }

    fetchData();
  }, [setFavouritesCats]);

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
      <GridPattern
        cats={favouritesCats}
        deleteFromFavourites={deleteFromFavourites}
        addLog={addLog}
      />
      <LogsStory logs={logs} />
    </div>
  );
}
