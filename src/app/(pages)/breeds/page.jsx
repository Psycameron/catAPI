"use client";

import { useEffect, useState } from "react";
import BreedsFilter from "@/components/BreedsFilter/BreedsFilter";
import { getAllBreeds } from "@/utils/api";

export default function Breeds() {
  const [breeds, setBreeds] = useState(null);
  // console.log(`🚀 ~ Breeds ~ breeds:`, breeds);

  useEffect(() => {
    async function fetchData() {
      const data = await getAllBreeds();
      setBreeds(data);
    }

    fetchData();
  }, []);

  if (!breeds) {
    return;
  }

  return (
    <>
      <div>Breeds Page</div>
      <BreedsFilter breeds={breeds} />
    </>
  );
}
