"use client";

import { useEffect, useState } from "react";
import { getAllBreeds } from "@/utils/api";

export default function useBreeds() {
  const [breeds, setBreeds] = useState(null);

  useEffect(() => {
    async function loadBreeds() {
      const data = await getAllBreeds();
      setBreeds(data);
    }

    loadBreeds();
  }, []);

  return { breeds };
}
