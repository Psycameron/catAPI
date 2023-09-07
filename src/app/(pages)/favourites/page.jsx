"use client";

import GridPattern from "@/components/GridPattern/GridPattern";
import LogsStory from "@/components/LogsStory/LogsStory";
import { useFavourites } from "@/hooks/useFavourites";
import { getFavourites } from "@/utils/api";
import { useEffect, useState } from "react";

export default function Favourites() {
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

  return (
    <div>
      <GridPattern
        cats={favouritesCats}
        deleteFromFavourites={deleteFromFavourites}
      />
      {/* <LogsStory /> */}
    </div>
  );
}
