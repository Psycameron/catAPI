const ORDER_VALUE = ["Random", "Desc", "Asc"];
const TYPE_VALUE = [
  ["gif,png,jpeg", "All"],
  ["png,jpeg", "Static"],
  ["gif", "Animated"],
];
const LIMITS_VALUE = [5, 10, 15, 20];

export default function GalleryForm({
  breeds,
  handleSelectChange,
  selectedOrder,
  selectedType,
  selectedBreedId,
  selectedLimit,
  onSubmit,
}) {
  return (
    <div>
      <form action="" onSubmit={onSubmit}>
        <label htmlFor="">
          ORDER
          <select
            name="order"
            id=""
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
        </label>
        <label htmlFor="">
          TYPE
          <select
            name="type"
            id=""
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
        </label>
        <label htmlFor="">
          BREED
          <select
            name="breeds"
            id=""
            value={selectedBreedId}
            onChange={handleSelectChange}
          >
            <option value="default">All breeds</option>
            {breeds.map(({ id, name }) => {
              return (
                <option key={id} value={id}>
                  {name}
                </option>
              );
            })}
          </select>
        </label>
        <label htmlFor="">
          LIMIT
          <select
            name="limits"
            id=""
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
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
