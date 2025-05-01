import { useEffect, useContext, useState } from "react";
import useApi from "../../../hooks/useApi";
import { CordsContext } from "../../../contexts/cordsContext";
import CONFIG from "/config.json";
import { WeatherDataContext } from "../../../contexts/weatherDataContext";
import Louder from "../../../components/louder";

function WeatherInfo() {
  const { setWeatherData, weatherData } = useContext(WeatherDataContext)

  const dateCreator = (date, index) => {
    const dateNumber = date.split("-")
    return dateNumber[index]
  }

  if (!weatherData) {
    return (
      <Louder/>
    );
  }

  return (
    <div className="border-black rounded-2xl bg-blur p-2.5 items-center flex flex-col relative max-w-fit mx-auto">
      <p className="text-[0.75rem] mb-3">
        Today,&nbsp;{dateCreator(weatherData.forecast.forecastday[0].date, 2)}&nbsp;{CONFIG.months[dateCreator(weatherData.forecast.forecastday[0].date, 1)]}
      </p>
      <p className="text-6xl text-shadow-sm">
        {weatherData && weatherData.current.temp_c}°
      </p>
      <p className="text-shadow-sm">
        {weatherData && weatherData.current.condition.text}
      </p>
      <div className="flex mt-4">
        <div className="flex gap-3 pr-3.5 border-r-white border-r-2">
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_15_63)" filter="url(#filter0_di_15_63)">
              <path
                d="M8.86233 12.4021H4.31758V11.0038H8.86233C9.30894 11.0039 9.74699 11.1263 10.129 11.3576C10.511 11.589 10.8225 11.9204 11.0296 12.3161C11.2367 12.7118 11.3316 13.1566 11.3039 13.6024C11.2763 14.0481 11.1272 14.4778 10.8728 14.8449C10.6184 15.2119 10.2684 15.5024 9.86077 15.6848C9.4531 15.8672 9.00329 15.9345 8.56008 15.8795C8.11687 15.8245 7.69717 15.6492 7.34644 15.3728C6.99571 15.0963 6.72733 14.7291 6.57038 14.3109L7.87996 13.8194C7.94721 13.9986 8.06222 14.156 8.21252 14.2745C8.36282 14.393 8.54269 14.4681 8.73264 14.4917C8.92258 14.5153 9.11536 14.4865 9.29009 14.4083C9.46482 14.3302 9.61482 14.2057 9.72386 14.0484C9.8329 13.8911 9.89681 13.7069 9.90867 13.5159C9.92053 13.3249 9.87988 13.1342 9.79113 12.9646C9.70238 12.7951 9.56891 12.653 9.40519 12.5538C9.24147 12.4547 9.05374 12.4022 8.86233 12.4021ZM5.01677 8.20699H14.4559C14.9025 8.20715 15.3405 8.32952 15.7226 8.56085C16.1046 8.79218 16.416 9.12364 16.6231 9.51933C16.8302 9.91501 16.9251 10.3598 16.8975 10.8056C16.8699 11.2513 16.7208 11.681 16.4664 12.0481C16.212 12.4152 15.862 12.7056 15.4543 12.888C15.0466 13.0704 14.5968 13.1377 14.1536 13.0827C13.7104 13.0277 13.2907 12.8525 12.94 12.576C12.5893 12.2995 12.3209 11.9323 12.1639 11.5142L13.4735 11.0226C13.5408 11.2018 13.6558 11.3592 13.8061 11.4777C13.9564 11.5963 14.1362 11.6714 14.3262 11.695C14.5161 11.7185 14.7089 11.6897 14.8836 11.6116C15.0584 11.5334 15.2084 11.4089 15.3174 11.2516C15.4264 11.0943 15.4904 10.9102 15.5022 10.7191C15.5141 10.5281 15.4734 10.3375 15.3847 10.1679C15.2959 9.99829 15.1625 9.85622 14.9987 9.75707C14.835 9.65791 14.6473 9.60546 14.4559 9.60538H5.01677C4.46046 9.60538 3.92693 9.38438 3.53356 8.99101C3.14018 8.59764 2.91919 8.06411 2.91919 7.5078C2.91919 6.95149 3.14018 6.41796 3.53356 6.02459C3.92693 5.63121 4.46046 5.41022 5.01677 5.41022H10.9599C11.1513 5.41014 11.339 5.35768 11.5028 5.25853C11.6665 5.15938 11.8 5.01731 11.8887 4.84772C11.9775 4.67814 12.0181 4.4875 12.0062 4.29646C11.9944 4.10542 11.9305 3.92127 11.8214 3.76396C11.7124 3.60665 11.5624 3.48218 11.3877 3.40403C11.2129 3.32589 11.0202 3.29705 10.8302 3.32064C10.6403 3.34422 10.4604 3.41934 10.3101 3.53786C10.1598 3.65637 10.0448 3.81375 9.97754 3.99295L8.66795 3.50212C8.86965 2.9657 9.25316 2.51706 9.75166 2.23435C10.2502 1.95165 10.8321 1.8528 11.3959 1.95505C11.9598 2.0573 12.47 2.35415 12.8375 2.79388C13.205 3.23361 13.4066 3.78835 13.4071 4.36143C13.4071 5.01046 13.1493 5.63291 12.6903 6.09184C12.2314 6.55078 11.6089 6.8086 10.9599 6.8086H5.01677C4.83133 6.8086 4.65349 6.88227 4.52236 7.01339C4.39124 7.14452 4.31758 7.32236 4.31758 7.5078C4.31758 7.69324 4.39124 7.87108 4.52236 8.0022C4.65349 8.13333 4.83133 8.20699 5.01677 8.20699Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_di_15_63"
                x="-0.741614"
                y="0.516113"
                width="19.0431"
                height="19.7972"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="-1.50827" dy="2.26241" />
                <feGaussianBlur stdDeviation="0.377069" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_15_63"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_15_63"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="-0.754137" dy="0.754137" />
                <feGaussianBlur stdDeviation="0.754137" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect2_innerShadow_15_63"
                />
              </filter>
              <clipPath id="clip0_15_63">
                <rect
                  width="16.7806"
                  height="16.7806"
                  fill="white"
                  transform="translate(1.5208 0.516113)"
                />
              </clipPath>
            </defs>
          </svg>
          <p className="text-shadow-sm">Wind</p>
        </div>
        <p className="pl-3.5 text-shadow-sm">
          {weatherData && weatherData.current.wind_kph}&nbsp;km/h
        </p>
      </div>
      <div className="flex mt-1.5">
        <div className="flex gap-3 pr-3.5 border-r-white border-r-2 ml-[-7%]">
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_15_66)" filter="url(#filter0_di_15_66)">
              <path
                d="M8.91112 2.44851L5.45011 5.90952C4.76567 6.59402 4.29958 7.46611 4.11077 8.41551C3.92196 9.36491 4.01892 10.349 4.38937 11.2433C4.75983 12.1376 5.38715 12.9019 6.19201 13.4397C6.99687 13.9775 7.94313 14.2645 8.91112 14.2645C9.87911 14.2645 10.8254 13.9775 11.6302 13.4397C12.4351 12.9019 13.0624 12.1376 13.4329 11.2433C13.8033 10.349 13.9003 9.36491 13.7115 8.41551C13.5227 7.46611 13.0566 6.59402 12.3721 5.90952L8.91112 2.44851ZM8.91112 0.471191L13.3608 4.92086C14.2408 5.80091 14.8401 6.92217 15.0829 8.14284C15.3257 9.36351 15.2011 10.6288 14.7248 11.7786C14.2486 12.9285 13.442 13.9112 12.4072 14.6027C11.3723 15.2941 10.1557 15.6632 8.91112 15.6632C7.66653 15.6632 6.4499 15.2941 5.41507 14.6027C4.38023 13.9112 3.57368 12.9285 3.09739 11.7786C2.62111 10.6288 2.49649 9.36351 2.73929 8.14284C2.98209 6.92217 3.58141 5.80091 4.46145 4.92086L8.91112 0.471191Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_di_15_66"
                x="-1.7416"
                y="0.280518"
                width="19.0431"
                height="19.7972"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="-1.50827" dy="2.26241" />
                <feGaussianBlur stdDeviation="0.377069" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_15_66"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_15_66"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="-0.754137" dy="0.754137" />
                <feGaussianBlur stdDeviation="0.754137" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect2_innerShadow_15_66"
                />
              </filter>
              <clipPath id="clip0_15_66">
                <rect
                  width="16.7806"
                  height="16.7806"
                  fill="white"
                  transform="translate(0.520813 0.280518)"
                />
              </clipPath>
            </defs>
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