/**
 * Компонент отображения иконки погоды.
 * Использует данные из контекста погоды для отображения соответствующей иконки.
 * Если данные недоступны, отображается стандартная иконка дождя.
 *
 * @returns {JSX.Element} JSX-элемент с изображением иконки погоды.
 */

import rain from "/public/svg/raini-b.svg"
import { useContext } from "react";
import { WeatherDataContext } from "../../../contexts/weatherDataContext";

function WeatherIcon() {
  const { weatherData } = useContext(WeatherDataContext);

  return (
    <div className="flex justify-center pb-6 pt-11">
      <img
        className="h-30 aspect-square"
        src={weatherData ? weatherData.forecast.forecastday[0].day.condition.icon : rain}
        alt={weatherData && weatherData.forecast.forecastday[0].day.condition.text}
      />
    </div>
  );
}


export default WeatherIcon;
