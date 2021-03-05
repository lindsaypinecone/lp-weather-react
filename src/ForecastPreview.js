import React from "react";

import "./ForecastPreview.css";

export default function ForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }
  function forecastIcon() {
    let forecastIconUrl = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
    return (
      <div className="forecastIcons">
        <img src={forecastIconUrl} alt={props.data.weather[0].main} />
      </div>
    );
  }
  function temperature() {
    let temperature = Math.round(props.data.main.temp);
    return `${temperature}°C`;
  }

  return (
    <div className="ForecastPreview col">
      {hours()}
      {forecastIcon()}
      {temperature()}
    </div>
  );
}
