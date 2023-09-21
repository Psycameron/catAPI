"use client";

import GridPattern from "@/components/GridPattern/GridPattern";
import { useSearch } from "@/contexts/searchContext";

import styles from "./page.module.css";
import NoItemsFound from "@/components/NoItemsFound/NoItemsFound";

export default function Search() {
  const { query, cats } = useSearch();

  if (!cats) {
    return null;
  }

  return (
    <>
      {cats.length === 0 ? (
        <NoItemsFound />
      ) : (
        <div>
          <p className={styles.p}>
            Search results for: <span className={styles.span}>{query}</span>
          </p>
          <GridPattern cats={cats} />
        </div>
      )}
    </>
  );
}
