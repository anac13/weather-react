import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
export default function Weather() {


  return (
    <div className="Weather">
      <form>
        <div className="row ">
          <div className="col-9 ">
            <input
              type="search"
              placeholder="Enter a city.."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-1">
            <button type="Submit" className="btn btn-primary">
              Search
            </button>
          </div>
        </div>
      </form>
      <h1>tokio</h1>
      <ul>
        <li>Saturday 15:00</li>
        <li>Description: </li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
              alt="d"
           
            />
            
              <span className="temperature">6</span>
              <span className="unit">C</span>
         
        </div>

        <div className="col-6">
          <ul>
            <li>Wind:</li>
            <li>Humidity: </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
