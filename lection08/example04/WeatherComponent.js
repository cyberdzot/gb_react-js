import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
// если будет выбивать ошибку в консоли и не показывать погоду
// на локалке для теста запускать Chrome вот так:
// chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security

const convertMillibarsInMmHg = (value) => {
  return Math.round(value * 0.750063755419211);
};
const convertKmhInMs = (value) => {
  return Math.round(value * 1000 / 3600);
};

function WeatherComponent() {
  const defaultCity = "Moscow";
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState(defaultCity);
  const [error, setError] = useState(null);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  // функция для получения данных о погоде
  const getWeather = useCallback(() => {
    if (!city) return;

    const API_URL = `http://api.weatherapi.com/v1/current.json?key=15b898062ee2426982773728241703&q=${city}&aqi=no`;

    axios
      .get(API_URL)
      .then((response) => {
        setWeatherData(response.data);
        setError(null);
      })
      .catch((error) => {
        setError("Город не найден");
        setWeatherData(null);
      });
  }, [city]);

  // используем useEffect, чтобы получить данные о погоде при монтировании компонента
  useEffect(() => {
    getWeather();
  }, [city, getWeather]);
//   console.log(weatherData);
  return (
    <div className="weather-container">
      <input
        type="text"
        placeholder="Введите город"
        value={city}
        onChange={handleCityChange}
      />{" "}
      <button onClick={getWeather}>Поиск</button>

      {error && <div className="error">{error}</div>}
      {weatherData && (
        <div className="weather-info">
          <h3>Город: {weatherData.location.name} / Регион: {weatherData.location.region}</h3>
          <p>Температура: {weatherData.current.temp_c} °C</p>
          <p>Влажность: {weatherData.current.humidity} %</p>
          <p>
            Давление: {convertMillibarsInMmHg(weatherData.current.pressure_mb)}{" "}
            мм рт. ст.
          </p>
          <p>Скорость ветра: {convertKmhInMs(weatherData.current.wind_kph)} м/с</p>
        </div>
      )}
    </div>
  );
}

export default WeatherComponent;
