"use client";

import Link from "next/link";

import styles from "./SearchForm.module.css";
import SearchIcon from "public/images/svg/search.svg";

export default function SearchForm({ handleSubmit, handleChange }) {
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search for breeds by name"
        onChange={handleChange}
      />
      <Link href="/search">
        <button className={styles.button} type="submit">
          <SearchIcon className={styles.icon} />
        </button>
      </Link>
    </form>
  );
}
