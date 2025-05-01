import rain from "/public/svg/raini-b.svg"
import { useContext } from "react";
import { WeatherDataContext } from "../../../contexts/weatherDataContext";


function WeatherIcon() {
  const {weatherData} = useContext(WeatherDataContext)
  return (
    <div className="flex justify-center pb-6 pt-11">
      <img className="h-30 aspect-square" 
        src={weatherData ? weatherData.forecast.forecastday[0].day.condition.icon : rain} 
        alt={weatherData && weatherData.forecast.forecastday[0].day.condition.icon.text} 
      />
    </div>
  );
}

export default WeatherIcon;
