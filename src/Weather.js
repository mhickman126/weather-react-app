import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <form id="search-form" className="mb-4">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Please enter a city"
                  className="form-control"
                  id="city-input"
                  autocomplete="off"
                />

                <div className="col-3">
                  <input
                    type="submit"
                    value="Search"
                    className="btn w-100 btn-outline-light"
                  />
                </div>
              </div>
            </div>
          </form>

          <div className="overview">
            <h1 id="city">City Name</h1>
            <ul className="date-condition">
              <li>
                {" "}
                Last updated: <span id="date"></span>
              </li>
              <li id="description"></li>
            </ul>
          </div>

          <div className="row">
            <div className="col-4 left">
              <ul>
                <li>
                  Humidity: <span id="humidity"></span>%
                </li>
                <li>
                  Wind: <span id="wind"></span> km/h
                </li>
              </ul>
            </div>
            <div className="col-8 right">
              <div className="clearfix weather-temperature">
                <img src="" alt="" className="float-left" id="icon" />
                <strong id="temperature"></strong>
                <span className="units">
                  <a href="/" id="celsius-link">
                    °C
                  </a>{" "}
                  |{" "}
                  <a href="/" id="fahrenheit-link">
                    °F
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <a
          className="footer"
          href="https://github.com/mhickman126/weather-react-app"
        >
          Open-source code
        </a>
        &nbsp;by Michelle Hickman
      </footer>
    </div>
  );
}
