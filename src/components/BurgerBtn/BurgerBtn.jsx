"use client";

import Burger from "public/images/svg/burger.svg";
import styles from "./BurgerBtn.module.css";

export default function BurgerBtn() {
  return (
    <button type="button" className={styles.button}>
      <Burger className={styles.icon} />
    </button>
  );
}
