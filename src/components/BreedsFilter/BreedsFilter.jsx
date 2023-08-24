"use client";

import Image from "next/image";
import { useState } from "react";

export default function BreedsFilter({ breeds }) {
  const [selectedLimit, setSelectedLimit] = useState("option2");
  const [selectedBreed, setSelectedBreed] = useState("default");

  function handleSelectChange(e) {
    if (e.target.name === "breeds") {
      setSelectedBreed(e.target.value);
    }
    if (e.target.name === "limits") {
      setSelectedLimit(e.target.value);
    }
  }

  return (
    <>
      <select
        name="breeds"
        id=""
        value={selectedBreed}
        onChange={handleSelectChange}
      >
        <option value="default">All breeds</option>
        {breeds.map(({ id, name }) => {
          return (
            <option key={id} value={name}>
              {name}
            </option>
          );
        })}
      </select>
      <select name="limits" value={selectedLimit} onChange={handleSelectChange}>
        <option value="option1">Limit: 5</option>
        <option value="option2">Limit: 10</option>
        <option value="option3">Limit: 15</option>
        <option value="option4">Limit: 20</option>
      </select>
    </>
  );
}
