import { useContext } from "react";
import { WeatherDataContext } from "../../../contexts/weatherDataContext";

/**
 * Компонент кнопки выбора/отображения местоположения.
 * Отображает название текущего местоположения из контекста погоды и иконку с выпадающим списком.
 *
 * @param {Object} props - Входные свойства компонента.
 * @param {Function} props.handelClick - Callback-функция для обработки клика по кнопке.
 *
 * @returns {JSX.Element} JSX-элемент кнопки с иконкой и названием местоположения.
 */
export function LocationBtn({ handelClick }) {
  const { weatherData } = useContext(WeatherDataContext);

  return (
    <button
      onClick={handelClick}
      className="gap-x-2.5 flex items-center cursor-pointer"
    >
      {/* Иконка локации */}
      <span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* SVG-контент */}
        </svg>
      </span>

      {/* Название местоположения из данных погоды */}
      {weatherData && weatherData.location.name}

      {/* Иконка выпадающего списка */}
      <span>
        <svg
          width="6"
          height="5"
          viewBox="0 0 6 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* SVG-контент */}
        </svg>
      </span>
    </button>
  );
}


export default LocationBtn;
