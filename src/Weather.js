import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import CleanDate from "./CleanDate";

export default function Weather(props) {
  const [weatherInfo, setWeatherInfo] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherInfo({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      city: response.data.name,
      pressure: response.data.main.pressure,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  function search() {
    const apiKey = "bdcd22b83edd4d35012716b6cb110cc7";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  if (weatherInfo.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                placeholder="Enter a city..."
                onChange={updateCity}
              />
            </div>
            <div className="col-4">
              <input type="submit" value="Search" />
            </div>
          </div>
        </form>
        <h1>
          <CleanDate date={weatherInfo.date} />
        </h1>
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
    search();
    return "Loading...";
  }
}
