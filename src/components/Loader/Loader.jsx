import { Oval } from "react-loader-spinner";
import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={styles.wrapper}>
      <Oval
        height={40}
        width={40}
        color="var(--primary)"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="var(--primary-muted)"
        strokeWidth={4}
        strokeWidthSecondary={4}
      />
    </div>
  );
}
