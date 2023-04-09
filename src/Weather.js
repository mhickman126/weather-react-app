import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);

    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp - 273.16),
      humidity: response.data.main.humidity,
      date: "Sunday 06:00",
      description: response.data.weather[0].description,
      iconUrl:
        "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png",
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
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
          <h1>{weatherData.city}</h1>
          <p className="date-time">{weatherData.date}</p>
        </div>
        <ul>
          <li className="description">{weatherData.description}</li>
          <li className="temperature">
            {weatherData.temperature}°<span className="unit">C | F</span>
          </li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img
              src={weatherData.iconUrl}
              alt={weatherData.description}
              className="float-left"
            />
            <div className="float-left"></div>
          </div>

          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity} %</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "e98aa59f7379c095c350dff435a24df2";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
