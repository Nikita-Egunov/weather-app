import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import WeatherCard from "./weather-card";
import Louder from "/src/components/louder";

function HourlyWeather({ weatherData }) {
  const timeCreator = (time) => {
    const partOfTime = time.split(" ");

    return partOfTime[1];
  };

  const currentCalculate = (date) => {
    const dateParts = date.split(" ");
    const timeParts = dateParts[1].split(":");
    const hour = timeParts[0];
    const currentHour = new Date().getHours();

    return hour == currentHour ? true : false;
  };

  const getCurrentSlideIndex = (weatherData) => {
    if (!weatherData) return 0;
    const currentHour = new Date().getHours();
    const hours = weatherData.forecast.forecastday[0].hour;
    for (let i = 0; i < hours.length; i++) {
      if (currentCalculate(hours[i].time)) {
        return i;
      }
    }
    return 0;
  };

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
        {weatherData &&
          weatherData.forecast.forecastday[0].hour.map((obj) => {
            return (
              <SwiperSlide>
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
