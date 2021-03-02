import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [weatherInfo, setWeatherInfo] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherInfo({
      ready: true,
      date: "Sunday 11:23",
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      city: response.data.name,
      pressure: response.data.main.pressure,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (weatherInfo.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-8">
              <input type="search" placeholder="Enter a city..." />
            </div>
            <div className="col-4">
              <input type="submit" value="Search" />
            </div>
          </div>
        </form>
        <h1>{weatherInfo.date}</h1>
        <div className="icon">
          <img src="https://openweathermap.org/img/wn/02n@2x.png" alt="icon" />
        </div>

        <h2>
          {Math.round(weatherInfo.temperature)}
          <small className="units"> °C | °F</small>
        </h2>
        <h3>
          <span className="text-capitalize">{weatherInfo.description}</span> in{" "}
          {weatherInfo.city}
        </h3>
        <hr />
        <div className="details">
          <div className="row">
            <div className="col">Pressure: {weatherInfo.pressure} hPa</div>
            <div className="col">Humidity: {weatherInfo.humidity}%</div>
            <div className="col">Wind: {Math.round(weatherInfo.wind)} km/h</div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "bdcd22b83edd4d35012716b6cb110cc7";
    let city = "Taipei";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
