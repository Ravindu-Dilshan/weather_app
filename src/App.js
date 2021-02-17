import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import Input from "./components/input.comp";
import Weather from "./components/weather.comp";
import Error from "./components/error.comp";
import "./assets/weather.css";

const api = {
  key: "5ae2fa59d57c156a946c3cd6ab22946e",
  url: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [location, setlocation] = useState(false);

  useEffect(() => {
    if (!location) {
      navigator.geolocation.getCurrentPosition(showPosition, showPositionError);
      setlocation(true);
    }
  }, []);

  const showPosition = (position) => {
    fetch(
      `${api.url}/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${api.key}`
    )
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        console.log(result);
      });
  };

  const showPositionError = (error) => {
    console.log(error);
    alert(error.message);
  };

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
    <div
      className={
        typeof weather.main != "undefined"
          ? getWeatherIcon(weather.weather[0].id)
          : "App rain"
      }
    >
      <main>
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
              temp={weather.main.temp}
              humid={weather.main.humidity}
              wind={weather.wind.speed}
              pressure={weather.main.pressure}
              cloud={weather.clouds.all}
              desc={weather.weather[0].description}
              type={weather.weather[0].main}
              sunrise={weather.sys.sunrise}
              sunset={weather.sys.sunset}
              icon={weather.weather[0].id}
              time={weather.dt}
            />
          ) : (
            ""
          )}
        </div>
      </main>
    </div>
  );
}

export default App;

function getWeatherIcon(id) {
  if (id >= 200 && id <= 531) {
    return "App rain";
  } else if (id >= 600 && id <= 622) {
    return "App snow";
  } else if (id == 800) {
    return "App sun";
  } else if (id >= 701 && id <= 804) {
    return "App cloud";
  }
}