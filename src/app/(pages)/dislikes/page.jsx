"use client";

import GridPattern from "@/components/GridPattern/GridPattern";
import Loader from "@/components/Loader/Loader";
import NoItemsFound from "@/components/NoItemsFound/NoItemsFound";
import useVotes from "@/hooks/useVotes";
import { useEffect } from "react";

export default function Dislikes() {
  const { dislikesCats, isLoading, fetchAllVotes } = useVotes();

  useEffect(() => {
    fetchAllVotes();
  }, [fetchAllVotes]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {!dislikesCats ? (
            <NoItemsFound />
          ) : (
            <GridPattern cats={dislikesCats} />
          )}
        </>
      )}
    </>
  );
}
