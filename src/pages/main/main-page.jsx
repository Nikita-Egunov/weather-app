import WeatherIcon from "./components/weatherIcon";
import WeatherInfo from "./components/weatherInfo";
import Button from "../../components/button";
import Header from "../../components/header/header";
import CONFIG from "/config.json";
import { NavLink } from "react-router";
import CordsErrorModal from "../../components/cordsErrorModal";

export function MainPage({ classes }) {
  return (
    <>
      <Header />
      <main className={classes}>
        <WeatherIcon weatherCode={1} />
        <WeatherInfo />
        <NavLink
          to={CONFIG.app_routes.weatherReport}
          className="text-slate-600 bg-white rounded-2xl py-3 px-5 flex items-center [box-shadow:inset_-4px_3px_3px_0_rgba(255,255,255,0.25),inset_1px_-2px_4px_0_rgba(0,0,0,0.25),-3px_6px_35px_3px_rgba(0,0,0,0.1)] cursor-pointer max-w-fit mx-auto mt-17"
        >
          Forecast report
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
      <CordsErrorModal/>
    </>
  );
}

export default MainPage;
