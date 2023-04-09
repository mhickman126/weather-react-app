import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);

  function handleResponse(response) {
    console.log(response);
  }

  if (ready) {
    return (
      <div className="weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="serach"
                placeholder="Enter a city..."
                class="form-control"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" />
            </div>
          </div>
        </form>

        <h1>Atlanta</h1>
        <ul>
          <li>Sunday 09:00</li>
          <li>Light Drizzle</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img src="src/weathericon.png" alt="Light Drizzle" />
            7°C
          </div>

          <div className="col-6">
            <ul>
              <li>Precipitation: 15%</li>
              <li>Humidity: 88%</li>
              <li>Wind: 26 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "a54033ao500493763d370ef6f91a68tb";
    let city = "Atlanta";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
}
