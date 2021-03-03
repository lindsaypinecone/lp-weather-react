import React from "react";
import CleanDate from "./CleanDate";

export default function WeatherDisplay(props) {
  return (
    <div className="WeatherDisplay">
      <h1>
        <CleanDate date={props.data.date} />
      </h1>
      <div className="icon">
        <img src="https://openweathermap.org/img/wn/02n@2x.png" alt="icon" />
      </div>

      <h2>
        {Math.round(props.data.temperature)}
        <small className="units"> °C | °F</small>
      </h2>
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
    </div>
  );
}
