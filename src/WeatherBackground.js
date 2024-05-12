import React from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function WeatherBackground(props) {
  const codeMapping = {
    "01d": "#FFEBAE",
    "01n": "#023e6c",
    "02d": "#A8ABB0",
    "02n": "#A8ABB0",
    "03d": "#A8ABB0",
    "03n": "#A8ABB0",
    "04d": "#A8ABB0",
    "04n": "#A8ABB0",
    "09d": "#338ae8ef",
    "09n": "#338ae8ef",
    "10d": "#338ae8ef",
    "10n": "#338ae8ef",
    "11d": "#338ae8ef",
    "11n": "#338ae8ef",
    "13d": "#D1DBE5",
    "13n": "#D1DBE5",
    "50d": "#C4EFFF",
    "50n": "#C4EFFF",
  };

  const codeColor = {
    "01d": "#FFC100",
    "01n": "#C8F1F5",
    "02d": "#4E5A66",
    "02n": "#4E5A66",
    "03d": "#4E5A66",
    "03n": "#4E5A66",
    "04d": "#4E5A66",
    "04n": "#4E5A66",
    "09d": "#0d2872",
    "09n": "#0d2872",
    "10d": "#0d2872",
    "10n": "#0d2872",
    "11d": "#0d2872",
    "11n": "#0d2872",
    "13d": "#F7F8FC",
    "13n": "#F7F8FC",
    "50d": "#50D3FC",
    "50n": "#50D3FC",
  };

  const background = {
    background: `${codeMapping[props.data.icon]}`,
  };

  const color = codeColor[props.data.icon];

  return (
    <div className="WeatherBackground">
      <h1 className="title-city" style={{ color: `${color}` }}>
        {props.data.city}
      </h1>
      <div className="row mt-4">
        <div className="col m-2 weatherInfo" style={background}>
          <WeatherInfo data={props.data} iconColor={color} />
        </div>
        <div className="col m-2 forecastInfo" style={background}>
          <WeatherForecast
            coordinates={props.data.coordinates}
            iconColor={color}
          />
        </div>
      </div>
    </div>
  );
}
