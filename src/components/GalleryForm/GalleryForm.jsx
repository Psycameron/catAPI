import Update from "public/images/svg/update.svg";
import styles from "./GalleryForm.module.css";

const ORDER_VALUE = ["Random", "Desc", "Asc"];
const TYPE_VALUE = [
  ["gif,png,jpeg", "All"],
  ["png,jpeg", "Static"],
  ["gif", "Animated"],
];
const LIMITS_VALUE = [5, 10, 15, 20];

export default function GalleryForm({
  breeds,
  allBreedIds,
  handleSelectChange,
  selectedOrder,
  selectedType,
  selectedBreedId,
  selectedLimit,
  handleSubmit,
  handleKeyPress,
}) {
  return (
    <div>
      <form
        className={styles.form}
        onSubmit={handleSubmit}
        onKeyDown={handleKeyPress}
      >
        <div className={styles.wrapper}>
          <label className={styles.label} htmlFor="order">
            ORDER
          </label>
          <select
            className={styles.select}
            name="order"
            id="order"
            value={selectedOrder}
            onChange={handleSelectChange}
          >
            {ORDER_VALUE.map((value) => {
              return (
                <option key={value} value={value.toUpperCase()}>
                  {value}
                </option>
              );
            })}
          </select>
        </div>

        <div className={styles.wrapper}>
          <label className={styles.label} htmlFor="type">
            TYPE
          </label>
          <select
            className={styles.select}
            name="type"
            id="type"
            value={selectedType}
            onChange={handleSelectChange}
          >
            {TYPE_VALUE.map(([a, b]) => {
              return (
                <option key={b} value={a}>
                  {b}
                </option>
              );
            })}
          </select>
        </div>

        <div className={styles.wrapper}>
          <label className={styles.label} htmlFor="breeds">
            BREED
          </label>
          <select
            className={styles.select}
            name="breeds"
            idr="breeds"
            value={selectedBreedId || ""}
            onChange={handleSelectChange}
          >
            <option value={allBreedIds}>All breeds</option>
            {breeds.map(({ id, name }) => {
              return (
                <option key={id} value={id}>
                  {name}
                </option>
              );
            })}
          </select>
        </div>

        <div className={styles.wrapper}>
          <label className={styles.label} htmlFor="limits">
            LIMIT
          </label>
          <select
            className={`${styles.select} ${styles.limit}`}
            name="limits"
            id="limits"
            value={selectedLimit}
            onChange={handleSelectChange}
          >
            {LIMITS_VALUE.map((value) => {
              return (
                <option key={value} value={value}>
                  {value} items per page
                </option>
              );
            })}
          </select>
        </div>

        <button className={styles.button} type="submit">
          <Update className={styles.icon} />
        </button>
      </form>
    </div>
  );
}
