"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getCatsWithBreed } from "@/utils/api";

export default function useFirstFetchData() {
  const [cats, setCats] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/breeds" || pathname === "/gallery") {
      async function fetchData() {
        const data = await getCatsWithBreed();

        setCats(data);
      }

      fetchData();
    }
  }, [pathname, setCats]);

  return { cats, setCats };
}
