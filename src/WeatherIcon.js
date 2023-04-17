import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import "./Weather.css";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "PARTLY_CLOUDY_DAY",
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "RAIN",
    "11n": "RAIN",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  };

  const colorCodeMapping = {
    "01d": "#ff6053",
    "01n": "#ff6053",
    "02d": "#ff6053",
    "02n": "#ff6053",
    "03d": "#ff6053",
    "03n": "#ff6053",
    "04d": "#ffa957",
    "04n": "#ffa957",
    "09d": "#393e5b",
    "09n": "#393e5b",
    "10d": "#393e5b",
    "10n": "#393e5b",
    "11d": "#393e5b",
    "11n": "#393e5b",
    "13d": "393e5b",
    "13n": "#393e5b",
    "50d": "F393e5b",
    "50n": "#393e5b",
  };

  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      // color="#393e5b"
      color={colorCodeMapping[props.code]}
      size={props.size}
      animate={true}
    />
  );
}
