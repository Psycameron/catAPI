"use client";

import GridPattern from "@/components/GridPattern/GridPattern";
import NoItemsFound from "@/components/NoItemsFound/NoItemsFound";
import useVotes from "@/hooks/useVotes";
import { useEffect } from "react";

export default function Likes() {
  const { likesCats, fetchAllVotes } = useVotes();

  useEffect(() => {
    fetchAllVotes();
  }, [fetchAllVotes]);

  return (
    <div>
      <GridPattern cats={likesCats} />
    </div>
  );
}
