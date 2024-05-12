import React from "react";
import Weather from "./Weather";
import bgVideo from "./video/background.mp4";
import "./App.css";

function App() {
  return (
    <div className="App">
      <video autoPlay loop muted>
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          <p>
            This project was coded by{" "}
            <a
              href="https://github.com/anac13"
              target="_blank"
              rel="noreferrer"
            >
              Ana Cañete{" "}
            </a>
            and is
            <a
              href="https://github.com/anac13/weather-react"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              open-sourced on GitHub
              {" "}
            </a>
            and
            <a
              href="https://github.com/anac13"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              hosted on Netlify
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
