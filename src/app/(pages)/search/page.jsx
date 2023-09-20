"use client";

import GridPattern from "@/components/GridPattern/GridPattern";
import { useSearch } from "@/contexts/searchContext";

import styles from "./page.module.css";

export default function Search() {
  const { query, cats } = useSearch();

  return (
    <div>
      <p className={styles.p}>
        Search results for: <span className={styles.span}>{query}</span>
      </p>
      <GridPattern cats={cats} />
    </div>
  );
}
