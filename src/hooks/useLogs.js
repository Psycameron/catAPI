import { useState } from "react";

export default function useLogs() {
  const [logs, setLogs] = useState([]);

  function addLog(id, message) {
    const log = {
      date: formatTime(new Date()),
      id,
      action: message,
    };

    setLogs((prevLogs) => [log, ...prevLogs]);
  }

  function formatTime(date) {
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${formattedHours}:${formattedMinutes}`;
  }

  return {
    logs,
    addLog,
  };
}
