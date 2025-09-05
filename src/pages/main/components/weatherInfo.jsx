import { useContext } from "react";
import CONFIG from "/config.json";
import { WeatherDataContext } from "../../../contexts/weatherDataContext";
import Louder from "../../../components/louder";

/**
 * Компонент отображения информации о текущей погоде.
 * Включает температуру, описание погоды, скорость ветра и влажность.
 * Использует данные из контекста погоды и отображает индикатор загрузки при отсутствии данных.
 *
 * @returns {JSX.Element} JSX-элемент с информацией о погоде или компонентом загрузки.
 */
function WeatherInfo() {
  const { weatherData } = useContext(WeatherDataContext);

  /**
   * Формирует часть даты по указанному индексу.
   * Разбивает строку даты на элементы и возвращает нужную часть.
   * 
   * @param {string} date - Строка даты в формате "YYYY-MM-DD".
   * @param {number} index - Индекс части даты (0 - год, 1 - месяц, 2 - день).
   * @returns {string} Часть даты по указанному индексу.
   */
  const dateCreator = (date, index) => {
    const dateNumber = date.split("-");
    return dateNumber[index];
  };

  // Отображение индикатора загрузки, если данные о погоде еще не загружены
  if (!weatherData) {
    return (
      <Louder />
    );
  }

  return (
    <div className="border-black rounded-2xl bg-blur p-2.5 items-center flex flex-col relative max-w-fit mx-auto">
      {/* Дата */}
      <p className="text-[0.75rem] mb-3">
        Today,&nbsp;
        {dateCreator(weatherData.forecast.forecastday[0].date, 2)}&nbsp;{CONFIG.months[dateCreator(weatherData.forecast.forecastday[0].date, 1)]}
      </p>

      {/* Температура */}
      <p className="text-6xl text-shadow-sm">
        {weatherData && weatherData.current.temp_c}°
      </p>

      {/* Описание погоды */}
      <p className="text-shadow-sm">
        {weatherData && weatherData.current.condition.text}
      </p>

      {/* Скорость ветра */}
      <div className="flex mt-4">
        <div className="flex gap-3 pr-3.5 border-r-white border-r-2">
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* SVG-контент */}
          </svg>
          <p className="text-shadow-sm">Wind</p>
        </div>
        <p className="pl-3.5 text-shadow-sm">
          {weatherData && weatherData.current.wind_kph}&nbsp;km/h
        </p>
      </div>

      {/* Влажность */}
      <div className="flex mt-1.5">
        <div className="flex gap-3 pr-3.5 border-r-white border-r-2 ml-[-7%]">
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* SVG-контент */}
          </svg>
          <p className="text-shadow-sm">Hum</p>
        </div>
        <p className="pl-3.5 text-shadow-sm">
          {weatherData && weatherData.current.humidity}&nbsp;%
        </p>
      </div>
    </div>
  );
}

export default WeatherInfo;