import HourlyWeather from "./components/hourly-weather";
import NextWeather from "./components/next-weather";
import TopNav from "./components/top-nav";
import { useContext, useEffect } from "react";
import HourlyTitle from "./components/hourly-title";
import NextTitle from "./components/next-title";
import { WeatherDataContext } from "/src/contexts/weatherDataContext.js";
import getWeatherData from "../../helpers/getWeatherData";
import { WeatherProviderContext } from "../../contexts/weatherProviderContext";

function WeatherReportPage() {
  const { weatherData, setWeatherData } = useContext(WeatherDataContext);
  const weatherProviderValue = useContext(WeatherProviderContext) 

  useEffect(() => {
    getWeatherData(weatherProviderValue)
  }, [])

  return (
    <main className="pt-9">
      <TopNav />
      <HourlyTitle weatherData={weatherData}/>
      <HourlyWeather weatherData={weatherData} />
      <NextTitle />
      <NextWeather weatherData={weatherData} />
    </main>
  );
}

export default WeatherReportPage;
