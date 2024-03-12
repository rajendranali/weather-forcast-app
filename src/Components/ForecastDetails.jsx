import React from "react";

const ForecastDetails = ({ weather, title }) => {
  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  return (
    <div className="text-white">
      <div className="flex justify-start items-center mt-6">
        <p className="font-medium uppercase">{title} Forecast</p>
      </div>
      <hr className="my-2" />
      <div className="flex justify-around items-center">
        {weather &&
          weather.list &&
          weather.list.slice(0, 4).map((forecast, index) => (
            <div key={index} className="flex flex-col items-center">
              <p className="font-light text-sm">{formatTime(forecast.dt)}</p>
              <img
                src={`https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`}
                alt="Weather icon"
                className="w-16 h-16"
              />
              <p className="font-light text-sm">{Math.round(forecast.main.temp)}&deg;C</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ForecastDetails;
