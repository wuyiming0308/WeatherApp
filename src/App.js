import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import Load from "./components/Load";
import { weatherForecast, weatherCurrent } from "./API";
import CurrentWeather from "./components/CurrentWeather";
import ForecastWeather from "./components/ForecastWeather";

function App() {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [curWeather, setCurWeather] = useState("");
  const [forWeather, setForWeather] = useState("");
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };
  const handleSearchCity = (e) => {
    e.preventDefault();
    setLoading(true);
    const ForecastWeatherFecth = fetch(weatherForecast(value));
    const CurrentWeatherFecth = fetch(weatherCurrent(value));

    Promise.all([CurrentWeatherFecth, ForecastWeatherFecth])
      .then(([resulta, resultb]) => {
        if (!resulta.ok || !resultb.ok) {
          throw new Error("Cannot Find This Location");
        }
        return [resulta, resultb];
      })
      .then(([currentWeather, forecastWeather]) => {
        return Promise.all([currentWeather.json(), forecastWeather.json()]);
      })
      .then(([currentResponse, forecastResponse]) => {
        setCurWeather(currentResponse);
        setForWeather(forecastResponse);
        setError(false);
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="App">
      <div>Weather App</div>
      <Search
        value={value}
        change={handleInputChange}
        submit={handleSearchCity}
        showResult={(curWeather || error) && true}
      />
      {loading === true ? (
        <Load />
      ) : (
        <div>
          {curWeather.name !== undefined ? (
            <div>
              {" "}
              {curWeather && <CurrentWeather data={curWeather} />}
              {forWeather && <ForecastWeather data={forWeather} />}
            </div>
          ) : error ? (
            <p>Sorry! We donot have any information about this location.</p>
          ) : (
            <div></div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
