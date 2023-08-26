"use client";

import LogsStory from "@/components/LogsStory/LogsStory";
import ReactionsMenu from "@/components/ReactionsMenu/ReactionsMenu";
import { getRandomCat } from "@/utils/api";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Voting() {
  const [catInfo, setCatInfo] = useState(null);
  // console.log(`🚀 ~ Voting ~ catInfo:`, catInfo);

  useEffect(() => {
    async function fetchData() {
      const data = await getRandomCat();
      setCatInfo(data);
    }

    fetchData();
  }, []);

  if (!catInfo) {
    return;
  }

  return (
    <div>
      <Image src={catInfo.url} alt={"cat"} width={640} height={360} />
      <ReactionsMenu catInfo={catInfo} />
      <LogsStory />
    </div>
  );
}
