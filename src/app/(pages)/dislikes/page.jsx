"use client";

import GridPattern from "@/components/GridPattern/GridPattern";
import useVotes from "@/hooks/useVotes";
import { useEffect } from "react";

export default function Dislikes() {
  const { dislikesCats, fetchAllVotes } = useVotes();

  useEffect(() => {
    fetchAllVotes();
  }, [fetchAllVotes]);

  return (
    <div>
      <GridPattern cats={dislikesCats} />
    </div>
  );
}
