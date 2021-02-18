import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Search() {
  let [city, setCity] = useState(null);
  let [weather, setWeather] = useState(null);

  function showWeather(response) {
    let imgURL = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;
    setWeather(
      <ul>
        <li>Temperature: {Math.round(response.data.main.temp)}°C</li>
        <li>Description: {response.data.weather[0].main}</li>
        <li>Humidity: {response.data.main.humidity}%</li>
        <li>Wind: {Math.round(response.data.wind.speed)}km/h</li>
        <li>
          <img src={imgURL} alt="icon" />
        </li>
      </ul>
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bdcd22b83edd4d35012716b6cb110cc7&units=metric`;
    axios.get(url).then(showWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city..."
          onChange={updateCity}
        />
        <input type="submit" value="Search" />
      </form>
      <h2>{weather}</h2>
    </div>
  );
}
