"use client";

import { useEffect } from "react";
import useVotes from "@/hooks/useVotes";

import GridPattern from "@/components/GridPattern/GridPattern";

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
