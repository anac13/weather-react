import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <p>
          Coded by Ana Cañete and is
          <a
            href="https://github.com/anac13/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced on GitHub
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
