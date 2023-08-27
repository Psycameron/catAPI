import styles from "./Paper.module.css";

export default function Paper({ color = "default", children }) {
  const containerClass = color === "default" ? "" : styles.customBackground;

  return (
    <div className={`${containerClass} ${styles.container}`}>{children}</div>
  );
}
