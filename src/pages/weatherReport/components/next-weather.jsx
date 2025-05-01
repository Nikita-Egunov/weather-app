import { NavLink } from "react-router";
import WeatherCard from "./weather-card";
import Louder from "/src/components/louder";
import CONFIG from "/config.json";

function NextWeather({ weatherData }) {
  const currentCalculate = (date) => {
    const dateParts = date.split("-")
    const day = dateParts[2]
    const currentDay = new Date().getDate()    

    return day == currentDay ? true : false
  }

  if (!weatherData) {
    return <Louder />;
  }

  return (
    <div className="">
      <div className="max-h-44 overflow-auto scrollbar scrollbar-thumb-rounded-2xl scrollbar-track-rounded-2xl scrollbar-w-0.5 scrollbar-thumb-white">
        {weatherData &&
          weatherData.forecast.forecastday.map((obj, index) => {
            const number = obj.date.split("-");
            const temperature = Math.round(
              (obj.day.maxtemp_c + obj.day.mintemp_c) / 2
            );
            const month = number[1];
            return (
              <WeatherCard
                temperature={temperature}
                iconUrl={obj.day.condition.icon}
                iconAlt={obj.day.condition.text}
                time={CONFIG.months[number[1]] + ", " + number[2]}
                isColumn={false}
                isCurrent={currentCalculate(obj.date)}
                key={index}
              />
            );
          })}
      </div>
    </div>
  );
}

export default NextWeather;
