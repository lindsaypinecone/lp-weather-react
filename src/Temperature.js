import React from "react";

import "./Temperature.css";

export default function Temperature() {
  let temperatureData = {
    temp: -11,
  };
  return (
    <div className="temperature">
      <h2>
        <span>{temperatureData.temp}</span>
        <small className="units"> °C | °F</small>
      </h2>
    </div>
  );
}
