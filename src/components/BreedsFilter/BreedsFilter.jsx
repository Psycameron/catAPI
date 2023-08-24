"use client";

const LIMITS_VALUE = [5, 10, 15, 20];

export default function BreedsFilter({
  breeds,
  selectedLimit,
  selectedBreed,
  handleSelectChange,
}) {
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
            <option key={id} value={id}>
              {name}
            </option>
          );
        })}
      </select>
      <select name="limits" value={selectedLimit} onChange={handleSelectChange}>
        {LIMITS_VALUE.map((value) => {
          return (
            <option key={value} value={value}>
              Limits: {value}
            </option>
          );
        })}
      </select>
    </>
  );
}
