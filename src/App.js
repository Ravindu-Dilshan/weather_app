import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Input from "./components/input.comp";
import Weather from "./components/weather.comp";
import Error from "./components/error.comp";
import "./assets/weather.css";
import logo from "./assets/icons/a.png";

const api = {
  key: "5ae2fa59d57c156a946c3cd6ab22946e",
  url: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (event) => {
    if (event.key === "Enter") {
      fetch(`${api.url}weather?q=${query}&units=metric&appid=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };

  return (
    <div className="App hot">
      <div>
        <Input query={query} search={search} setQuery={setQuery} />
        {typeof weather.message != "undefined" ? (
          <Error message={weather.message} />
        ) : (
          ""
        )}
        {typeof weather.main != "undefined" ? (
          <Weather
            city={weather.name}
            country={weather.sys.country}
            temp_min={weather.main.temp_min}
            temp_max={weather.main.temp_max}
            desc={weather.weather[0].description}
            type={weather.weather[0].main}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;

/*<div className="m-3">
  <input
    type="text"
    className="form-control"
    placeholder="New York"
    onChange={(e) => setQuery(e.target.value)}
    value={query}
    onKeyPress={search}
  ></input>
  <div className="card text-center mt-5">
    <div className="card-body">
      {typeof weather.main != "undefined" ? (
        <>
          <h3 className="card-title">
            {weather.name}, {weather.sys.country}
          </h3>
          <h4 className="card-text">Tempreature</h4>
          <p className="card-text"></p>
          <h5 className="card-text">
            {weather.main.temp_min} °C to {weather.main.temp_max} °C
          </h5>
          <h5 className="card-text">
            {weather.weather[0].main} ({weather.weather[0].description})
          </h5>
        </>
      ) : (
        <>
          <h3 className="card-title"></h3>
          <h4 className="card-text">Tempreature</h4>
          <p className="card-text"></p>
          <h5 className="card-text"> °C</h5>
        </>
      )}
    </div>
  </div>
</div>;*/
