import axios from "axios";
import { DateTime } from "luxon";

const baseUrl = "https://api.openweathermap.org/data/2.5";
const ApiKey = "454fab5a17802fb06e61ab3a07c354c9";

export const makeApilurl = async (info, searchparam) => {
  const url = new URL(baseUrl + "/" + info);
  url.search = new URLSearchParams({ ...searchparam, appid: ApiKey });
  return fetch(url).then((r) => r.json());
};
const formateData = (data) => {
  console.log(data);
  const {
    coord: { lat, lon },
    sys: { country, sunset, sunrise },
    name,
    dt,
    weather,
    main: { temp, feels_like, temp_min, temp_max, humidity },
    wind: { speed },
  } = data;

  const { main: details, icon } = weather[0];
  return {
    lat,
    lon,
    country,
    sunrise,
    sunset,
    name,
    dt,
    details,
    icon,
    temp,
    temp_max,
    temp_min,
    feels_like,
    humidity,
    speed,
  };
};

const ForecastDetails = (data) => {
  console.log("Data",data)
  const { timezone, daily, hourly } = data;
  daily = daily.slice(1, 6).map((it) => {
    return {
      title: formattime(it.dt, timezone, "ccc"),
      temp: it.temp.day,
      icon: it.weather[0].icon,
    };
  });
};
export const FetchData = async (searchparam) => {
  console.log("WEETYR",searchparam)
  const format = await makeApilurl("weather", searchparam).then((r)=>r);
  // const { lat, lon } = format;
  // const forecast = await makeApilurl("onecall", {
  //   lat,
  //   lon,
  //   exclude: "current,minutely,alerts",
  //   // units: searchparam.units,
  // }).then(ForecastDetails);
  return { ...format };
};

const formattime = (
  secs,
  zone,
  format = "cccc,dd LLL yyyy' | Local Time: hh:mm a"
) => {
  DateTime.fromSeconds(secs).setZone(zone).toFormat(format);
};
