import HourlyWeather from "./components/hourly-weather";
import NextWeather from "./components/next-weather";
import TopNav from "./components/top-nav";
import { useContext } from "react";
import HourlyTitle from "./components/hourly-title";
import NextTitle from "./components/next-title";
import { WeatherDataContext } from "/src/contexts/weatherDataContext.js";

function WeatherReportPage() {
  const { weatherData, setWeatherData } = useContext(WeatherDataContext);

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
