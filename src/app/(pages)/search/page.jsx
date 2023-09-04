"use client";

import { useRouter } from "next/navigation";

export default function Search() {
  const router = useRouter();
  console.log(`🚀 ~ Search ~ router:`, router);

  return <div>page</div>;
}
