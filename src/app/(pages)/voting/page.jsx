"use client";

import LogsStory from "@/components/LogsStory/LogsStory";
import ReactionsMenu from "@/components/ReactionsMenu/ReactionsMenu";
import { addImageReaction, getRandomCat } from "@/utils/api";
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

  async function handleReaction(id, value) {
    const data = { image_id: id, value };

    await addImageReaction(data);

    loadNewCatImage();
  }

  async function loadNewCatImage() {
    const newCatInfo = await getRandomCat();
    setCatInfo(newCatInfo);
  }

  return (
    <div>
      <Image src={catInfo.url} alt={"cat"} width={640} height={360} />
      <ReactionsMenu catInfo={catInfo} handleReaction={handleReaction} />
      <LogsStory />
    </div>
  );
}
