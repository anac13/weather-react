import React, { useState } from "react";
import axios from "axios";
import "./App.css";
export default function Weather() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    if (city.length > 0) {
      let apiKey = "3a94f3778290bfeee61278505dbbe51d";
      let units = "metric";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
      axios.get(apiUrl).then(displayWeather);
    } else {
      alert("Enter city...");
    }
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <div className="row m-5">
        <div className="col-9 ">
          <input
            type="search"
            placeholder="Enter a city.."
            className="form-control"
            onChange={updateCity}
          />
        </div>
        <div className="col-1">
          <button type="Submit" className="btn btn-primary">
            Search
          </button>
        </div>
      </div>
    </form>
  );

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      name: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  if (loaded) {
    return (
      <div className="Weather">
        {form}
        <h1>{weather.name}</h1>
        <ul>
          <li>Saturday 15:00</li>
          <li>Description: {weather.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img src={weather.icon} alt={weather.description} />
            {Math.round(weather.temperature)}
          </div>
          
          <div className="col-6">
            <ul>
              <li>Wind: {weather.wind}</li>
              <li>Humidity: {weather.humidity}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="Weather">{form}</div>;
  }
}
