import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import SearchbarInput from './Components/SearchbarInput';
import TimeandLocation from './Components/TimeandLocation';
import TempDetails from './Components/TempDetails';
import ForecastDetails from './Components/ForecastDetails';
import { useEffect, useState } from 'react';
import { FetchData } from './Logic/Logics';

function App() {
  const [query, setQuery] = useState(null);
  const [weather, setWeather] = useState(null);

  const fetchWeatherData = async () => {
    try {
      if (query) {
        const data = await FetchData(query).then(r=>setWeather(r)); // Pass lat and lon separately
        // setWeather(data);
   
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  useEffect(() => {
    const getCurrentLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setQuery({ lat: latitude, lon: longitude });
          },
          (error) => {
            console.error('Error getting location:', error.message);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    };

    getCurrentLocation();
  }, []);

  useEffect(() => {
    fetchWeatherData();
  }, [query]);
console.log("tbihb",weather);
  return (
    <div className="mx-auto max-w-screen-md p-6 bg-gradient-to-br from-cyan-700 to-blue-700 shadow-xl rounded-lg">
      <div className="text-white text-center my-8">
        {weather && (
          <>
            {/* <Navbar /> */}
            <SearchbarInput />
            <TimeandLocation weather={weather} />
            <TempDetails weather={weather} />
            <ForecastDetails title="HOURLY"  weather={weather}/>
            <ForecastDetails title="WEEKLY" weather={weather}/>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
