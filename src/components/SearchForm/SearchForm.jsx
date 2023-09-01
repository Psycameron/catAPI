"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import styles from "./SearchForm.module.css";
import SearchIcon from "public/images/svg/search.svg";
import { Router } from "next/router";

export default function SearchForm({ breeds }) {
  const [query, setQuery] = useState("");
  const [breedIds, setBreedIds] = useState(null);

  if (!breeds) {
    return null;
  }

  function searchBreeds(query) {
    const exactMatches = breeds.filter(
      (breed) => breed.name === query.toLowerCase()
    );
    const similarMatches = breeds.filter(
      (breed) =>
        breed.name.toLowerCase().includes(query.toLowerCase()) &&
        breed.name !== query.toLowerCase()
    );

    const sortedResults = exactMatches.concat(similarMatches);

    return sortedResults;
  }
  console.log(`🚀 ~ searchBreeds ~ searchBreeds:`, searchBreeds(query));

  function queryToId() {}

  function handleChange(e) {
    setQuery(e.currentTarget.value);
  }

  // function handleSubmit(e) {
  //   e.preventDefault();

  //   if (query.trim() === "") {
  //     return;
  //   }

  //   const encodedQuery = encodeURIComponent(query);
  //   Router.push(`/search?query=${encodedQuery}`);
  // }

  return (
    <div className={styles.wrapper}>
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
    </div>
  );
}
