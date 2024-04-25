import React from "react";
import axios from "axios";

export default function Weather(props) {

  function showTemperature(response) {
    console.log(response.data.main.temp);
  }

  let apiKey = "3a94f3778290bfeee61278505dbbe51d";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Tokio&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
  return(<h1>hola</h1>)
}
