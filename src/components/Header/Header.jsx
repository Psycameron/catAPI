"use client";

import Link from "next/link";

import Logo from "public/Logo.svg";

export default function Header() {
  return (
    <>
      <Link href="/">
        <Logo />
        <h1>Hi! &#128075;</h1>
        <p>Welcome to MacPaw Bootcamp 2023</p>
      </Link>
    </>
  );
}
