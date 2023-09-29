"use client";

import Link from "next/link";

import Logo from "public/Logo.svg";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <>
      <Link href="/">
        <Logo className={styles.logo} />
      </Link>
      <h1 className={styles.title}>Hi! &#128075;</h1>
      <p className={styles.descr}>Welcome to the cat photo app</p>
    </>
  );
}
