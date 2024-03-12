import React from "react";
import { UilTemperatureQuarter, UilSunset, UilWind, UilSnowflakeAlt } from "@iconscout/react-unicons";

const TempDetails = ({ weather }) => {
  const convertTemperature = (fahrenheit) => {
    // Convert Fahrenheit to Celsius
    const celsius = (fahrenheit - 32) * 5/9;
    return Math.round(celsius);
  };

  const temperatureFahrenheit = weather && weather.main ? Math.round(weather.main.temp) : null;
  const temperatureCelsius = convertTemperature(temperatureFahrenheit);
  const humidity = weather && weather.main ? weather.main.humidity : null;
  const windSpeed = weather && weather.wind ? weather.wind.speed : null;
  const sunriseTime = weather && weather.sys ? new Date(weather.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : null;
  const sunsetTime = weather && weather.sys ? new Date(weather.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : null;

  return (
    <div className="text-white">
      <div className="flex items-center justify-center py-6 text-cyan-300 text-xl">
        <p>{weather && weather.weather && weather.weather.length > 0 ? weather.weather[0].description : "Unknown"}</p>
      </div>
      <div className="flex items-center justify-around py-3">
        {/* Replace the placeholder with the actual weather icon */}
        <img src={`https://openweathermap.org/img/w/${weather && weather.weather && weather.weather.length > 0 ? weather.weather[0].icon : "01d"}.png`} alt="Weather icon" className="w-20" />
        <p className="text-5xl font-medium">{temperatureCelsius}&deg;C</p>
        <div className="flex flex-col space-y-2">
          <div className="flex items-center">
            <UilTemperatureQuarter />
            <span className="ml-1 font-medium">Temp: {temperatureCelsius}&deg;C</span>
          </div>
          <div className="flex items-center">
            <UilWind />
            <span className="ml-1 font-medium">Wind: {windSpeed} m/s</span>
          </div>
          <div className="flex items-center">
            <UilSnowflakeAlt />
            <span className="ml-1 font-medium">Humidity: {humidity}%</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-2 text-sm py-3">
        <UilSunset />
        <p className="font-light">
          Sunrise: <span className="ml-1 font-medium">{sunriseTime}</span>
        </p>
        <span className="mx-1 font-light">|</span>

        <UilSunset />
        <p className="font-light">
          Sunset: <span className="ml-1 font-medium">{sunsetTime}</span>
        </p>
        {/* Add more sunset details following the same pattern */}
      </div>
    </div>
  );
};

export default TempDetails;
