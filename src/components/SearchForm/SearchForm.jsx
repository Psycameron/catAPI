"use client";

import Link from "next/link";
import styles from "./SearchForm.module.css";
import SearchIcon from "public/images/svg/search.svg";

export default function SearchForm() {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search for breeds by name"
      />
      <Link href="/search">
        <button className={styles.button} type="submit">
          <SearchIcon className={styles.icon} />
        </button>
      </Link>
    </div>
  );
}
