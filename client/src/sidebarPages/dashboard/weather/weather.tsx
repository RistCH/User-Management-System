import { useState, useEffect } from "react";
import axios from 'axios';

const API_KEY = "5ce30317b462db19f8fe3a7a1cf9a6ea";
const CITY_NAME = "San Fernando, PH";

interface WeatherData {
    main: {
      temp: number;
      humidity: number;
    };
    weather: {
      main: string;
      description: string;
    }[];
}

function Weather() {
 const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
 const [error, setError] = useState<string | null>(null);

 useEffect(() => {
  getWeatherData();
 }, []);

 const getWeatherData = async () => {
  try {
    setError(null);
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}&units=metric`);
    setWeatherData(response.data);
  } catch (error) {
    setError("City not found");
    setWeatherData(null);
  }
 };

 return (
  <div className=" flex 
  items-center 
  justify-center 
  p-4">
    <div className="bg-indigo-dye 
    p-6 
    rounded-lg 
    shadow-xl 
    w-96">
      <h1 className="text-2xl 
      font-semibold 
      mb-4 
      text-white">{CITY_NAME}</h1>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {weatherData && (
        <div className="mt-4">
          <p className="text-lg text-white">{weatherData.weather[0].main}</p>
          <p className="text-sm capitalize text-white">{weatherData.weather[0].description}</p>
          <p className="text-3xl font-bold mt-2 text-white">{weatherData.main.temp} °C </p>
          <p className="text-sm mt-2 text-white">Humidity: {weatherData.main.humidity}%</p>
        </div>
      )}
    </div>
  </div>
);

}

export default Weather;