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

export function App() {
  const [coords, setCoords] = useState(null);
  const prevCoordsRef = useRef(null); // Храним предыдущие координаты
  const [isPlacemarkVisible, setPlacemarkVisible] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const { data, loading, error, get } = useApi("http://api.weatherapi.com/v1");
  const [
    localStorageCords,
    setLocalStorageCords,
    removeLocalStorageCords,
    getLocalStorageCords,
    clear,
  ] = useLocalStorage([], null);
  const [isCordsError, setIsCordsError] = useState(false);
  const getCords = useNavigateCoords();
  const [isLocalModalOpen, setIsLocalModalOpen] = useState(false);


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

  const fetchWeatherData = async () => {
    await get(
      `/forecast.json?key=${CONFIG.API_KEY}&q=${coords.join(",")}&days=7`
    );
  };

  useEffect(() => {
    getWeatherData(weatherProviderValue)
  }, [coords, isCordsError]);

  useEffect(() => {
    console.log(coords);

    if (coords) {
      setIsCordsError(false);
    }
  }, [coords]);

  useEffect(() => {
    // Устанавливаем новое состояние данных, сохраняем в localStorage
    setWeatherData(data);
    setLocalStorageCords(data, [prevCoordsRef.current]);
    console.log(data, "data");
  }, [data]);

  const weatherProviderValue = {
    coords,
    fetchWeatherData,
    isCordsError,
    prevCoordsRef,
    setWeatherData,
  }
  

  return (
    <YMaps
      query={{
        apikey: CONFIG.YANDEX_MAP_API_KEY,
        lang: "ru_RU",
      }}
    >
      <div className="bg-gradient-to-br from-cyan-500 to-blue-500 font-overpass text-white px-5 h-full">
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
                    <Routes>
                      <Route
                        // path={CONFIG.app_routes.main}
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
