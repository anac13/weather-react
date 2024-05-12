import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return temperature;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return temperature;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="weekly-forecast m-2">
      <div className=" WeatherForecast-day">
        <p>{day()}</p>
      </div>
      <WeatherIcon code={props.data.weather[0].icon} size={26} color={props.iconColor}/>

      <div className="  WeatherForecast-temperaures">
        <p>
          <span className="WeatherForecast-temperature-max">
            {maxTemperature()}°
          </span>
          <span className="WeatherForecast-temperature-min">
            {minTemperature()}°
          </span>
        </p>
      </div>
    </div>
  );
}
