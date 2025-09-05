import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import WeatherCard from "./weather-card";
import Louder from "/src/components/louder";

/**
 * Компонент отображения прогноза погоды по часам.
 * Использует Swiper для создания карусели с прокруткой по часам,
 * выделяет текущий час и отображает температуру и иконку погоды.
 *
 * @param {Object} props - Входные свойства компонента.
 * @param {Object} props.weatherData - Объект данных о погоде, содержащий информацию о прогнозе по часам.
 * @returns {JSX.Element} JSX-элемент карусели с прогнозом погоды по часам.
 */
function HourlyWeather({ weatherData }) {
  /**
   * Формирует строку времени из полной даты.
   * 
   * @param {string} time - Строка в формате "YYYY-MM-DD HH:MM".
   * @returns {string} Только часть времени в формате "HH:MM".
   */
  const timeCreator = (time) => {
    const partOfTime = time.split(" ");
    return partOfTime[1];
  };

  /**
   * Проверяет, является ли указанное время текущим часом.
   * 
   * @param {string} date - Строка с временем в формате "YYYY-MM-DD HH:MM".
   * @returns {boolean} true, если час совпадает с текущим, иначе false.
   */
  const currentCalculate = (date) => {
    const dateParts = date.split(" ");
    const timeParts = dateParts[1].split(":");
    const hour = timeParts[0];
    const currentHour = new Date().getHours();
    return hour == currentHour ? true : false;
  };

  /**
   * Находит индекс текущего часа в массиве прогнозов.
   * 
   * @param {Object} weatherData - Данные о погоде.
   * @returns {number} Индекс текущего часа или 0 при ошибке.
   */
  const getCurrentSlideIndex = (weatherData) => {
    if (!weatherData) return 0;
    const hours = weatherData.forecast.forecastday[0].hour;
    for (let i = 0; i < hours.length; i++) {
      if (currentCalculate(hours[i].time)) {
        return i;
      }
    }
    return 0;
  };

  // Отображение индикатора загрузки при отсутствии данных
  if (!weatherData) {
    return <Louder />;
  }

  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={7}
        className="mt-5"
        initialSlide={getCurrentSlideIndex(weatherData)}
        centeredSlides={true}
        loop={true}
      >
        {/* Генерация карточек прогноза для каждого часа */}
        {weatherData &&
          weatherData.forecast.forecastday[0].hour.map((obj) => {
            return (
              <SwiperSlide key={obj.time}>
                <WeatherCard
                  temperature={obj.temp_c}
                  iconUrl={obj.condition.icon}
                  time={timeCreator(obj.time)}
                  isColumn={true}
                  isCurrent={currentCalculate(obj.time)}
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
}


export default HourlyWeather;
