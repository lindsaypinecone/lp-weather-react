import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import axios from "axios";

import Weather from "./Weather";
import Header from "./Header";
import DayDate from "./DayDate";
import Icon from "./Icon";
import Temperature from "./Temperature";
import Conditions from "./Conditions";
import Details from "./Details";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="container">
      <div className="weather-app">
        <Weather defaultCity="London" />
      </div>
      <Footer />
    </div>
  );
}
