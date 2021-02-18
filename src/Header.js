import React from "react";

import Search from "./Search";
import Geolocation from "./Geolocation";

export default function Header() {
  return (
    <div className="header">
      <div className="row">
        <div className="col-8">
          <Search />
        </div>
        <div className="col-4">
          <Geolocation />{" "}
        </div>
      </div>
    </div>
  );
}
