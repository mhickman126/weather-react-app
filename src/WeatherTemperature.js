import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function displayFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function displayCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return Math.round((props.celsius * 9) / 5 + 32);
  }

  if (unit === "celsius") {
    return (
      <li className="temperature">
        {props.celsius}°
        <span className="unit">
          C |{" "}
          <a href="/" onClick={displayFahrenheit}>
            F
          </a>
        </span>
      </li>
    );
  } else {
    return (
      <li className="temperature">
        {fahrenheit()}°
        <span className="unit">
          <a href="/" onClick={displayCelsius}>
            C
          </a>{" "}
          | F
        </span>
      </li>
    );
  }
}
