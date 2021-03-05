import React from "react";
import CleanDate from "./CleanDate";
import Temperature from "./Temperature";

import "./WeatherDisplay.css";

export default function WeatherDisplay(props) {
  return (
    <div className="WeatherDisplay">
      <h1>
        <CleanDate date={props.data.date} />
      </h1>
      <div className="icon">
        <img src={props.data.iconUrl} alt={props.data.description} />
      </div>

      <Temperature celsius={props.data.temperature} />

      <h3>
        <span className="text-capitalize">{props.data.description}</span> in{" "}
        {props.data.city}
      </h3>
      <hr />
      <div className="details">
        <div className="row">
          <div className="col">Pressure: {props.data.pressure} hPa</div>
          <div className="col">Humidity: {props.data.humidity}%</div>
          <div className="col">Wind: {Math.round(props.data.wind)} km/h</div>
        </div>
      </div>
      <hr />
    </div>
  );
}
