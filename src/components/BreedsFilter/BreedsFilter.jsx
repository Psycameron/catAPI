"use client";

import Sort from "public/images/svg/sort.svg";
import SortRevert from "public/images/svg/sort-revert.svg";
import styles from "./BreedsFilter.module.css";

const LIMITS_VALUE = [5, 10, 15, 20];

export default function BreedsFilter({
  breeds,
  allBreedIds,
  selectedLimit,
  selectedBreedId,
  handleSelectChange,
  handleSort,
}) {
  return (
    <form className={styles.form}>
      <select
        className={`${styles.select} ${styles.breeds}`}
        name="breeds"
        id=""
        value={selectedBreedId}
        onChange={handleSelectChange}
      >
        <option value={allBreedIds}>All breeds</option>
        {breeds.map(({ id, name }) => {
          return (
            <option className={styles.option} key={id} value={id}>
              {name}
            </option>
          );
        })}
      </select>

      <select
        className={`${styles.select} ${styles.limit}`}
        name="limits"
        value={selectedLimit}
        onChange={handleSelectChange}
      >
        {LIMITS_VALUE.map((value) => {
          return (
            <option className={styles.option} key={value} value={value}>
              Limits: {value}
            </option>
          );
        })}
      </select>

      <button
        className={styles.button}
        type="button"
        onClick={() => handleSort("ascending")}
      >
        <Sort className={styles.icon} />
      </button>
      <button
        className={styles.button}
        type="button"
        onClick={() => handleSort("descending")}
      >
        <SortRevert className={styles.icon} />
      </button>
    </form>
  );
}
