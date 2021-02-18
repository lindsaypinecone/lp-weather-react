import React from "react";

import "./DayDate.css";

export default function DayDate() {
  let timeData = {
    date: "Saturday 12:02",
  };
  return (
    <div className="day-date">
      <h1>
        <span>{timeData.date}</span>
      </h1>
    </div>
  );
}
