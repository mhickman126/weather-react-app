import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="Loc-time">
        <h1>{props.data.city}</h1>
        <p className="date-time">
          <FormattedDate date={props.data.date} />
        </p>
      </div>

      <div className="row">
        <div className="col-6">
          <ul>
            <li className="description">{props.data.description}</li>
            <li className="temperature">
              {props.data.temperature}°<span className="unit">C | F</span>
            </li>
          </ul>
        </div>
        <div className="col-6">
          <WeatherIcon code={props.data.icon} />
        </div>
      </div>
      <div className="row">
        <div className="col-6"></div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity} %</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
