import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-7">
          <div className="Loc-time">
            <h1>{props.data.city}</h1>
            <div className="date-time">
              <FormattedDate date={props.data.date} />
            </div>
          </div>
        </div>
        <div className="col-5"></div>
      </div>

      <div className="row">
        <div className="col-7">
          <ul>
            <li className="description">{props.data.description}</li>
            <WeatherTemperature celsius={props.data.temperature} />
          </ul>
        </div>
        <div className="col-5">
          <ul>
            <li className="humidity">Humidity: {props.data.humidity} %</li>
            <li className="wind">Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
