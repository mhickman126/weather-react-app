import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setTemperature(Math.round(response.data.temperature.current));
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
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
              <input
                type="submit"
                value="Search"
                className="search-btn w-100 btn "
                autoFocus="on"
              />
            </div>
          </div>
        </form>

        <div className="Loc-time">
          <h1>Atlanta</h1>
          <p className="date-time">Sunday 09:00</p>
        </div>
        <ul>
          <li className="description">Light Drizzle</li>
          <li className="temperature">
            {temperature}°<span className="unit">C | F</span>
          </li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
              alt="Rain"
              className="float-left"
            />
            <div className="float-left"></div>
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

    return "Loading...";
  }
}
