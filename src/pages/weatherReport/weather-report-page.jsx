import HourlyWeather from "./components/hourly-weather";
import NextWeather from "./components/next-weather";
import TopNav from "./components/top-nav";
import { useContext, useEffect } from "react";
import HourlyTitle from "./components/hourly-title";
import NextTitle from "./components/next-title";
import { WeatherDataContext } from "/src/contexts/weatherDataContext.js";
import getWeatherData from "../../helpers/getWeatherData";
import { WeatherProviderContext } from "../../contexts/weatherProviderContext";

/**
 * Компонент страницы с подробным прогнозом погоды.
 * Отображает часовой прогноз, заголовок, следующие дни и навигационную панель.
 * Использует данные из контекста погоды и провайдера для инициализации данных.
 *
 * @returns {JSX.Element} JSX-элемент страницы с прогнозом погоды.
 */
function WeatherReportPage() {
  const { weatherData } = useContext(WeatherDataContext);
  const weatherProviderValue = useContext(WeatherProviderContext);

  /**
   * Эффект для инициализации данных о погоде при загрузке компонента.
   * Вызывает функцию getWeatherData с текущими значениями провайдера.
   */
  useEffect(() => {
    getWeatherData(weatherProviderValue);
  }, []);

  return (
    <main className="pt-9">
      {/* Навигационная панель с кнопкой "Назад" */}
      <TopNav />

      {/* Заголовок раздела "Погода по часам" */}
      <HourlyTitle weatherData={weatherData} />

      {/* Карусель с прогнозом погоды по часам */}
      <HourlyWeather weatherData={weatherData} />

      {/* Заголовок раздела "Прогноз на следующие дни" */}
      <NextTitle />

      {/* Список прогнозов на ближайшие дни */}
      <NextWeather weatherData={weatherData} />
    </main>
  );
}


export default WeatherReportPage;
