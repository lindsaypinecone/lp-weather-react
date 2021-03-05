import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import axios from "axios";

import Weather from "./Weather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="container">
      <div className="weather-app">
        <Weather defaultCity="Taipei" />
      </div>
      <Footer />
    </div>
  );
}
