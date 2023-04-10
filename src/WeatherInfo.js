import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="Loc-time">
        <h1>{props.data.city}</h1>
        <p className="date-time">
          <FormattedDate date={props.data.date} />
        </p>
      </div>
      <ul>
        <li className="description">{props.data.description}</li>
        <li className="temperature">
          {props.data.temperature}°<span className="unit">C | F</span>
        </li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            className="float-left"
          />
          <div className="float-left"></div>
        </div>

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
