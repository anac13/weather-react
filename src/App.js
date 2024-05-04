import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity= "Tokio"/>
        <footer>
          
            Coded by Ana Cañete and is
            <a
              href="https://github.com/anac13/weather-react"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              open-sourced on GitHub
            </a>
          
        </footer>
      </div>
    </div>
  );
}

export default App;
