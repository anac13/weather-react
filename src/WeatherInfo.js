import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row mt-3">
        <div className="col icon-data">
          <div className="clearfix">
            <div className="float-start">
              <WeatherIcon code={props.data.icon} size={72} color= {props.iconColor} />
            </div>
          </div>
        </div>

        <div className="col temperature-data">
          <div className="clearfix">
            <div className="float-start mb-3">
              <h1 className="text-capitalize">{props.data.description}</h1>
              <WeatherTemperature celsius={props.data.temperature} color={props.iconColor}/>
              <p>
                <FormattedDate date={props.data.date} />
              </p>
            </div>
          </div>
        </div>
        <div>
          <ul>
            <li>Wind: {props.data.wind}%</li>
            <li>Humidity: {props.data.humidity} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
