"use client";

import { useEffect } from "react";

import useVotes from "@/hooks/useVotes";

import GridPattern from "@/components/GridPattern/GridPattern";
import Loader from "@/components/Loader/Loader";
import NoItemsFound from "@/components/NoItemsFound/NoItemsFound";

export default function Likes() {
  const { likesCats, isLoading, fetchAllVotes } = useVotes();

  useEffect(() => {
    fetchAllVotes();
  }, [fetchAllVotes]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>{!likesCats ? <NoItemsFound /> : <GridPattern cats={likesCats} />}</>
      )}
    </>
  );
}
