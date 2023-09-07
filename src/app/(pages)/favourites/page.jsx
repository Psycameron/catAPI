"use client";

import { useEffect, useState } from "react";
import { useFavourites } from "@/hooks/useFavourites";
import { useLogs } from "@/hooks/useLogs";
import { getFavourites } from "@/utils/api";

import LogsStory from "@/components/LogsStory/LogsStory";
import GridPattern from "@/components/GridPattern/GridPattern";

export default function Favourites() {
  const { favouritesCats, deleteFromFavourites, setFavouritesCats } =
    useFavourites();
  const { logs, addLog } = useLogs();

  useEffect(() => {
    async function fetchData() {
      const data = await getFavourites();
      console.log(`🚀 ~ fetchData ~ data:`, data);
      setFavouritesCats(data);
    }

    fetchData();
  }, [setFavouritesCats]);

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
