import React from "react";
import "./App.css";
import axios from "axios";

import Header from "./Header";
import DayDate from "./DayDate";
import Icon from "./Icon";
import Temperature from "./Temperature";
import Conditions from "./Conditions";
import Details from "./Details";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="wrapper">
      <div className="weather-app">
        <Header />
        <DayDate />
        <Icon />
        <Temperature />
        <Conditions />
        <hr />
        <Details />
      </div>
      <Footer />
    </div>
  );
}
