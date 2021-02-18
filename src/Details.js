import React from "react";

import "./Details.css";

export default function Details() {
  let detailData = {
    pressure: 190,
    humidity: 4,
    wind: 8,
  };
  return (
    <div className="details">
      <div className="row">
        <div className="col">
          Pressure: <span>{detailData.pressure}</span> hPa
        </div>
        <div className="col">
          Humidity: <span>{detailData.humidity}</span>%
        </div>
        <div className="col">
          Wind: <span>{detailData.wind}</span> km/h
        </div>
      </div>
    </div>
  );
}
