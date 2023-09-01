// export const metadata = {
//   title: "PestPaw app",
//   description: "Generated by create next app",
// };
"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

import { getAllBreeds } from "@/utils/api";
import AdditionalNav from "@/components/AdditionalNav/AdditionalNav";
import BackBtn from "@/components/BackBtn/BackBtn";
import SearchForm from "@/components/SearchForm/SearchForm";

import styles from "./layout.module.css";
import Paper from "@/components/Paper/Paper";

export default function PagesLayout({ children }) {
  const pathname = usePathname();

  const [breeds, setBreeds] = useState(null);

  async function loadBreeds() {
    const data = await getAllBreeds();
    setBreeds(data);
  }

  if (!breeds) {
    loadBreeds();
  }

  return (
    <section>
      <div className={styles.navWrapper}>
        <SearchForm breeds={breeds} />
        <AdditionalNav />
      </div>
      <Paper>
        <div className={styles.innerWrapper}>
          <BackBtn />
          <h2 className={styles.title}>
            {pathname.replace("/", "").toUpperCase()}
          </h2>
        </div>
        {children}
      </Paper>
    </section>
  );
}
