import { useState } from "react";
import "./app.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "ed8623f4f35b3da9ff75d88390c09af6"; // Replace with your API key

  const fetchWeather = async () => {
    if (!city.trim()) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city.trim()}&appid=${API_KEY}&units=metric`
      );

      const data = await response.json();

      console.log(data);

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch weather");
      }

      setWeather(data);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <div className="weather-card">
        <h1>🌤 Weather Forecast</h1>

        <div className="search-box">
          <input
            type="text"
            placeholder="Enter city name..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                fetchWeather();
              }
            }}
          />

          <button onClick={fetchWeather}>Search</button>
        </div>

        {loading && <p className="loading">Loading...</p>}

        {error && <p className="error">{error}</p>}

        {weather && (
          <div className="weather-info">
            <h2>
              {weather.name}, {weather.sys.country}
            </h2>

            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
              alt="weather icon"
            />

            <h1 className="temp">
              {Math.round(weather.main.temp)}°C
            </h1>

            <p className="description">
              {weather.weather[0].description}
            </p>

            <div className="details">
              <div className="detail">
                <span>💧</span>
                <p>{weather.main.humidity}%</p>
                <small>Humidity</small>
              </div>

              <div className="detail">
                <span>🌬️</span>
                <p>{weather.wind.speed} m/s</p>
                <small>Wind Speed</small>
              </div>

              <div className="detail">
                <span>🌡️</span>
                <p>{Math.round(weather.main.feels_like)}°C</p>
                <small>Feels Like</small>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;