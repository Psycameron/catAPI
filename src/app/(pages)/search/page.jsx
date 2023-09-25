"use client";

import { useSearch } from "@/contexts/searchContext";

import GridPattern from "@/components/GridPattern/GridPattern";
import NoItemsFound from "@/components/NoItemsFound/NoItemsFound";
import styles from "./page.module.css";

export default function Search() {
  const { query, cats } = useSearch();

  if (!cats) {
    return null;
  }

  return (
    <>
      <p className={styles.p}>
        Search results for: <span className={styles.span}>{query}</span>
      </p>
      {cats.length === 0 ? (
        <NoItemsFound />
      ) : (
        <div>
          <GridPattern cats={cats} />
        </div>
      )}
    </>
  );
}
