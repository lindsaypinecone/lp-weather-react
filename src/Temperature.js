import React, { useState } from "react";

import "./Temperature.css";

export default function Temperature(props) {
  const [unit, setUnit] = useState("metric");
  function displayFahrenheit(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  function displayCelsius(event) {
    event.preventDefault();
    setUnit("metric");
  }
  if (unit === "metric") {
    return (
      <div className="temperature">
        <h2>
          <span className="main-temperature">{Math.round(props.celsius)}</span>
          <small className="units">
            {" "}
            °C |{" "}
            <a href="/" onClick={displayFahrenheit}>
              °F
            </a>
          </small>
        </h2>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="temperature">
        <h2>
          <span className="main-temperature">{Math.round(fahrenheit)}</span>
          <small className="units">
            {" "}
            <a href="/" onClick={displayCelsius}>
              °C
            </a>{" "}
            | °F
          </small>
        </h2>
      </div>
    );
  }
}
