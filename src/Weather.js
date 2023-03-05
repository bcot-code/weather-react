import React, { useState, useCallback } from "react";
import axios from "axios";

export default function Weather() {
  let [city, displayCity] = useState("");
  let [forecast, displayForecast] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = process.env.REACT_APP_API_KEY;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(url).then(showForecast);
  }
  function setCity(event) {
    displayCity(event.target.value);
  }
  function showForecast(response) {
    displayForecast(response.data);
  }

  return (
    <div className="Search">
      <h1>Weather Finder</h1>
      <form onSubmit={handleSubmit}>
        <input type="Search" placeholder="Search" onChange={setCity} />
        <input type="submit" value="Search" />
      </form>
      {forecast.main && (
        <ul>
          <li>
            temperature:{Math.round(forecast.main.temp)}
            <br />
            °F
          </li>
          <li>description:{forecast.weather[0].description}</li>
          <li>humidity:{forecast.main.humidity}</li>
          <li>
            <img
              id="icon"
              alt={forecast.weather[0].description}
              src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
            />
          </li>
        </ul>
      )}
    </div>
  );
}
