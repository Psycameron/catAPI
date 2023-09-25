"use client";
import { useSearch } from "@/contexts/searchContext";
import { useRouter } from "next/navigation";

import SearchIcon from "public/images/svg/search.svg";
import styles from "./SearchForm.module.css";

export default function SearchForm({ handleSubmit, handleChange }) {
  const router = useRouter();
  const { query } = useSearch();

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search for breeds by name"
        onChange={handleChange}
        value={query}
      />

      <button
        className={styles.button}
        type="submit"
        onClick={() => router.push("/search")}
      >
        <SearchIcon className={styles.icon} />
      </button>
    </form>
  );
}
