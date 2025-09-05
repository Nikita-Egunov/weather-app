import WeatherIcon from "./components/weatherIcon";
import WeatherInfo from "./components/weatherInfo";
import Button from "../../components/button";
import Header from "../../components/header/header";
import CONFIG from "/config.json";
import { NavLink } from "react-router";
import CordsErrorModal from "../../components/cordsErrorModal";

/**
 * Компонент главной страницы приложения.
 * Отображает заголовок, информацию о погоде, кнопку перехода к прогнозу и модальное окно ошибки координат.
 *
 * @param {Object} props - Входные свойства компонента.
 * @param {string} [props.classes] - Дополнительные CSS-классы для контейнера основного контента.
 *
 * @returns {JSX.Element} JSX-элемент главной страницы с полной информацией о погоде.
 */
export function MainPage({ classes }) {
  return (
    <div className="flex flex-col justify-between">
      {/* Заголовок приложения */}
      <Header />

      {/* Основной контент */}
      <main className={classes}>
        {/* Иконка текущей погоды */}
        <WeatherIcon weatherCode={1} />

        {/* Информация о температуре, условиях и метеорологических данных */}
        <WeatherInfo />

        {/* Кнопка перехода к прогнозу погоды */}
        <NavLink
          to={CONFIG.app_routes.weatherReport}
          className="text-slate-600 bg-white rounded-2xl py-3 px-5 flex items-center [box-shadow:inset_-4px_3px_3px_0_rgba(255,255,255,0.25),inset_1px_-2px_4px_0_rgba(0,0,0,0.25),-3px_6px_35px_3px_rgba(0,0,0,0.1)] cursor-pointer max-w-fit mx-auto mt-17"
        >
          Forecast report
          {/* Стрелка вправо */}
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.1948 8.93258L6.73377 5.47157L7.72242 4.48291L12.1721 8.93258L7.72242 13.3822L6.73376 12.3936L10.1948 8.93258Z"
              fill="#444E72"
            />
          </svg>
        </NavLink>
      </main>

      {/* Модальное окно ошибки получения геокоординат */}
      <CordsErrorModal />
    </div>
  );
}


export default MainPage;
