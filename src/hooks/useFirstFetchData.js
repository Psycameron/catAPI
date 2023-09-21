"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getCatsWithBreed } from "@/utils/api";

export default function useFirstFetchData() {
  const pathname = usePathname();

  const [firstCats, setFirstCats] = useState(null);
  const [selectedLimit, setSelectedLimit] = useState(10);

  useEffect(() => {
    if (pathname === "/breeds" || pathname === "/gallery") {
      async function fetchData() {
        const data = await getCatsWithBreed(selectedLimit);

        setFirstCats(data);
      }

      fetchData();
    }
  }, [pathname, selectedLimit, setFirstCats]);

  return { firstCats, selectedLimit, setSelectedLimit };
}
