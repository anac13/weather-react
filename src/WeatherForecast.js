import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "3a94f3778290bfeee61278505dbbe51d";
   let units = "metric";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(handleResponse);


 return (
  <div className="WeatherForecast">
    <div className="row mt-3">
      <div className="col">
        <div className="WeatherForecast-day">Thu</div>

        <WeatherIcon code="01d" size={36} />

        <div className="WeatherForecast-temperaures">
          <span className="WeatherForecast-temperature-max">19°</span>
          <span className="WeatherForecast-temperature-min">10°</span>
        </div>
      </div>
    </div>
  </div>
);
}
