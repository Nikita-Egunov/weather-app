import CONFIG from "../config.json";
import { YMaps } from "@pbe/react-yandex-maps";
import MainPage from "./pages/main/main-page";
import { CordsContext } from "./contexts/cordsContext";
import { useState, useEffect, useRef, useContext } from "react";
import { PlacemarkContext } from "./contexts/placemarkContext";
import { WeatherDataContext } from "./contexts/weatherDataContext";
import { Route, Routes } from "react-router";
import WeatherReportPage from "./pages/weatherReport/weather-report-page";
import Page404 from "./pages/404/404-page";
import useApi from "./hooks/useApi";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { isGeoErrorContext } from "/src/contexts/isGeoErrorContext.js";
import { useNavigateCoords } from "./hooks/useNavigateCoords";
import { LocalModalContext } from "./contexts/localModalContext";
import getWeatherData from "./helpers/getWeatherData";
import { WeatherProviderContext } from "./contexts/weatherProviderContext";
import { useLocation } from 'react-router';

/**
 * Основной компонент приложения. 
 * Обрабатывает логику геолокации, загрузку данных о погоде, 
 * работу с localStorage и предоставляет контекст для всех компонентов.
 * Использует Яндекс Карты для отображения местоположения.
 *
 * @returns {JSX.Element} JSX-структура приложения с маршрутами и контекстами.
 */
export function App() {
  // Состояние и ссылки для управления геокоординатами
  const [coords, setCoords] = useState(null);
  const prevCoordsRef = useRef(null); // Хранение предыдущих координат для сравнения
  const [isPlacemarkVisible, setPlacemarkVisible] = useState(false); // Отображение метки на карте
  const [weatherData, setWeatherData] = useState(null); // Данные о погоде
  const { data, get } = useApi("https://api.weatherapi.com/v1"); // Хук для работы с API погоды
  const [
    localStorageCords,
    setLocalStorageCords,
    removeLocalStorageCords,
    getLocalStorageCords,
    clear,
  ] = useLocalStorage([], null); // Хук для работы с localStorage
  const [isCordsError, setIsCordsError] = useState(false); // Флаг ошибки геолокации
  const [isLocalModalOpen, setIsLocalModalOpen] = useState(false); // Состояние модального окна карты

  /**
   * Эффект для получения геокоординат пользователя.
   * Использует кастомный хук useNavigateCoords().
   * При ошибке устанавливает флаг isCordsError.
   */
  useEffect(() => {
    const getCoords = useNavigateCoords();
    const fetchLocation = async () => {
      try {
        const { latitude, longitude } = await getCoords();
        setCoords([latitude, longitude]);
      } catch (error) {
        setIsCordsError(true);
      }
    };

    fetchLocation();
  }, []);

  /**
   * Функция для запроса данных о погоде к API.
   * Использует текущие координаты для формирования URL.
   */
  const fetchWeatherData = async () => {
    await get(
      `/forecast.json?key=${CONFIG.API_KEY}&q=${coords.join(",")}&days=7`
    );
  };

  /**
   * Эффект для получения данных о погоде.
   * Вызывает getWeatherData при изменении координат или флага ошибки.
   */
  useEffect(() => {
    getWeatherData(weatherProviderValue)
  }, [coords, isCordsError]);

  /**
   * Эффект для обновления состояния ошибки геолокации.
   * Сбрасывает isCordsError при наличии новых координат.
   */
  useEffect(() => {
    console.log(coords);

    if (coords) {
      setIsCordsError(false);
    }
  }, [coords]);

  /**
   * Эффект для обновления состояния данных о погоде.
   * Сохраняет данные в localStorage при изменении.
   */
  useEffect(() => {
    // Устанавливаем новое состояние данных, сохраняем в localStorage
    setWeatherData(data);
    setLocalStorageCords(data, [prevCoordsRef.current]);
    console.log(data, "data");
  }, [data]);

  // Объект для передачи данных через WeatherProviderContext
  const weatherProviderValue = {
    coords,
    fetchWeatherData,
    isCordsError,
    prevCoordsRef,
    setWeatherData,
  }
    const location = useLocation();

  useEffect(() => {
    console.log('Current path:', location.pathname);
    console.log('Expected basename:', '/weather-app');
  }, [location]);

  return (
    <YMaps
      query={{
        apikey: CONFIG.YANDEX_MAP_API_KEY,
        lang: "ru_RU",
      }}
    >
      <div className="bg-gradient-to-br from-cyan-500 to-blue-500 font-overpass text-white px-5 h-full">
        {/* Контексты для передачи данных между компонентами */}
        <CordsContext.Provider value={{ coords, setCoords }}>
          <WeatherDataContext.Provider value={{ setWeatherData, weatherData }}>
            <PlacemarkContext.Provider
              value={{ isPlacemarkVisible, setPlacemarkVisible }}
            >
              <isGeoErrorContext.Provider
                value={{ isCordsError, setIsCordsError }}
              >
                <LocalModalContext.Provider
                  value={{ isLocalModalOpen, setIsLocalModalOpen }}
                >
                  <WeatherProviderContext.Provider value={weatherProviderValue}>
                    {/* Маршруты приложения */}
                    <Routes>
                      <Route
                        index
                        element={<MainPage classes={"pb-6 relative"} />}
                      />
                      <Route
                        path={CONFIG.app_routes.weatherReport}
                        element={<WeatherReportPage />}
                      />
                      <Route
                        path={CONFIG.app_routes.notFound}
                        element={<Page404 />}
                      />
                    </Routes>
                  </WeatherProviderContext.Provider>
                </LocalModalContext.Provider>
              </isGeoErrorContext.Provider>
            </PlacemarkContext.Provider>
          </WeatherDataContext.Provider>
        </CordsContext.Provider>
      </div>
    </YMaps>
  );
}


export default App;
