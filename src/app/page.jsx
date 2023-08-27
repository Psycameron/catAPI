import Image from "next/image";
import Paper from "@/components/Paper/Paper";

import girlAndPet from "/public/images/girl-and-pet.png";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <Paper color="custom">
        <Image
          className={styles.image}
          src={girlAndPet}
          alt="girl and pet"
          width={775}
          height={900}
        />
      </Paper>
    </div>
  );
}
