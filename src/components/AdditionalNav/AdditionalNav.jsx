import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./AdditionalNav.module.css";
import Like from "public/images/svg/like.svg";
import Fav from "public/images/svg/fav.svg";
import Dislike from "public/images/svg/dislike.svg";

export default function AdditionalNav() {
  const pathname = usePathname();

  return (
    <ul className={styles.list}>
      <li
        className={`${styles.item} ${
          pathname === "/likes" ? `${styles.active}` : ""
        }`}
      >
        <Link className={styles.link} href="/likes">
          <Like className={styles.icon} />
        </Link>
      </li>
      <li
        className={`${styles.item} ${
          pathname === "/favourites" ? `${styles.active}` : ""
        }`}
      >
        <Link className={styles.link} href="/favourites">
          <Fav className={styles.icon} />
        </Link>
      </li>
      <li
        className={`${styles.item} ${
          pathname === "/dislikes" ? `${styles.active}` : ""
        }`}
      >
        <Link className={styles.link} href="/dislikes">
          <Dislike className={styles.icon} />
        </Link>
      </li>
    </ul>
  );
}
