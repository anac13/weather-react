import React, { useState, useEffect } from "react";

import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [forecast, setForecast] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setLoaded(true);
    setForecast(response.data.daily);
  }

  function load() {
    let apiKey = "8ca7dd4e61360b90fb66918853670e48";
    let units = "metric";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row m-1">
         
            {forecast.map(function (dailyForecast, index) {
              if (index > 0 && index < 7) {
                return (
                  <div className=" col-4 forecast" key={index}>
                    <WeatherForecastDay
                      data={dailyForecast}
                      iconColor={props.iconColor}
                    />
                  </div>
                );
              } else {
                return null;
              }
            })}
       
        </div>
      </div>
    );
  } else {
    load();
    return null;
  }
}
