import React from "react";

export default function Conditions() {
  let conditionsData = {
    description: "Partly cloudy",
    city: "Grantham",
  };
  return (
    <div className="conditions">
      <h3>
        <span>{conditionsData.description}</span> in
        <span> {conditionsData.city}</span>
      </h3>
    </div>
  );
}
