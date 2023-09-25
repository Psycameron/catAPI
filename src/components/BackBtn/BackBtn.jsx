"use client";

import { useRouter } from "next/navigation";

import Back from "public/images/svg/back.svg";
import styles from "./BackBtn.module.css";

function BackButton() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <button className={styles.button} onClick={handleGoBack}>
      <Back className={styles.icon} />
    </button>
  );
}

export default BackButton;
