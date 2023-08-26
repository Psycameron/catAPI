export default function LogsStory({ logs }) {
  if (logs.length === 0) {
    return;
  }

  return (
    <ul>
      {logs.map(({ id, date, action }, index) => {
        return (
          <li key={index}>
            <span>{date}</span>
            <span>Image ID: {id}</span>
            <span>{action}</span>
          </li>
        );
      })}
    </ul>
  );
}
