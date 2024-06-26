import React, { useState } from "react";
import ReactLoading from "react-loading";
import axios from "axios";
import WeatherBackground from "./WeatherBackground";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      coordinates: response.data.coord,
    });
  }

  function search() {
    let apiKey = "3a94f3778290bfeee61278505dbbe51d";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <WeatherBackground data={weatherData} />
        <form onSubmit={handleSubmit} className="mt-3">
          <div className="row ">
            <div className="col-9 ">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control form-input"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-1">
              <button type="Submit" className="btn btn-button">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  } else {
    search();
    return (
      <ReactLoading type="bubbles" color="#8fb4fd" height={500} width={500} />
    );
  }
}
