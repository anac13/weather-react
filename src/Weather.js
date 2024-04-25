import React from "react";
import axios from "axios";

export default function Weather(props) {

    function handleSubmit(event) {
        
    }

  let form = (
    <form onSubmit={handleSubmit}>
      <div className="row m-5">
        <div className="col-6 ">
          <input
            type="search"
            placeholder="Enter a city.."
            className="form-control"
          />
        </div>
        <div className="col-1">
          <input type="submit" value="Search" className="btn btn-primary" />
        </div>
      </div>
    </form>
  );

  function showTemperature(response) {
    console.log(response.data.main.temp);
  }

  let apiKey = "3a94f3778290bfeee61278505dbbe51d";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Tokio&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
  return <div className="Weather">{form}</div>;
}
