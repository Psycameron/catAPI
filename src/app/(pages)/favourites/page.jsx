"use client";

import { useEffect, useState } from "react";
import useFavourites from "@/hooks/useFavourites";
import useLogs from "@/hooks/useLogs";

import LogsStory from "@/components/LogsStory/LogsStory";
import GridPattern from "@/components/GridPattern/GridPattern";
import Loader from "@/components/Loader/Loader";
import NoItemsFound from "@/components/NoItemsFound/NoItemsFound";

export default function Favourites() {
  const { favouritesCats, fetchFavourites, deleteFromFavourites } =
    useFavourites();
  const { logs, addLog } = useLogs();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function loadFavourites() {
      await fetchFavourites();
      setIsLoading(false);
    }

    loadFavourites();
  }, [fetchFavourites]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {!favouritesCats ? (
            <NoItemsFound />
          ) : (
            <GridPattern
              cats={favouritesCats}
              deleteFromFavourites={deleteFromFavourites}
              addLog={addLog}
            />
          )}
        </>
      )}

      <LogsStory logs={logs} />
    </>
  );
}
