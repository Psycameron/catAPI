"use client";

import Search from "public/images/svg/search.svg";

export default function SearchForm() {
  return (
    <div>
      <input type="text" placeholder="Search for breeds by name" />
      <button type="submit">
        <Search />
      </button>
    </div>
  );
}
