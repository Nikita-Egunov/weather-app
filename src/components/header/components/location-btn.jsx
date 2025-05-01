import { useContext } from "react";
import { WeatherDataContext } from "../../../contexts/weatherDataContext";

export function LocationBtn({ handelClick }) {
  const { setWeatherData, weatherData } = useContext(WeatherDataContext);
  return (
    <button
      onClick={handelClick}
      className="gap-x-2.5 flex items-center cursor-pointer"
    >
      <span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_15_73)">
            <g filter="url(#filter0_dii_15_73)">
              <path
                d="M9.06471 16.843L4.61505 12.3933C3.735 11.5132 3.13568 10.392 2.89288 9.1713C2.65008 7.95063 2.7747 6.68538 3.25099 5.53553C3.72727 4.38569 4.53383 3.4029 5.56866 2.71145C6.6035 2.02 7.82013 1.65094 9.06471 1.65094C10.3093 1.65094 11.5259 2.02 12.5608 2.71145C13.5956 3.4029 14.4022 4.38569 14.8784 5.53553C15.3547 6.68538 15.4793 7.95063 15.2365 9.1713C14.9937 10.392 14.3944 11.5132 13.5144 12.3933L9.06471 16.843ZM12.5257 11.4046C13.2102 10.7201 13.6762 9.84803 13.8651 8.89863C14.0539 7.94924 13.9569 6.96517 13.5865 6.07087C13.216 5.17658 12.5887 4.41221 11.7838 3.87444C10.979 3.33666 10.0327 3.04962 9.06471 3.04962C8.09672 3.04962 7.15047 3.33666 6.34561 3.87444C5.54075 4.41221 4.91343 5.17658 4.54297 6.07087C4.17251 6.96517 4.07556 7.94924 4.26437 8.89863C4.45318 9.84803 4.91927 10.7201 5.60371 11.4046L9.06471 14.8656L12.5257 11.4046ZM9.06471 9.34201C8.69384 9.34201 8.33815 9.19468 8.0759 8.93243C7.81366 8.67018 7.66633 8.3145 7.66633 7.94362C7.66633 7.57275 7.81366 7.21706 8.0759 6.95482C8.33815 6.69257 8.69384 6.54524 9.06471 6.54524C9.43559 6.54524 9.79127 6.69257 10.0535 6.95482C10.3158 7.21706 10.4631 7.57275 10.4631 7.94362C10.4631 8.3145 10.3158 8.67018 10.0535 8.93243C9.79127 9.19468 9.43559 9.34201 9.06471 9.34201Z"
                fill="white"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_dii_15_73"
              x="-40.968"
              y="-33.0394"
              width="94.0323"
              height="96.6389"
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
              <feMorphology
                radius="3.01655"
                operator="dilate"
                in="SourceAlpha"
                result="effect1_dropShadow_15_73"
              />
              <feOffset dx="-3.01655" dy="6.0331" />
              <feGaussianBlur stdDeviation="18.8534" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_15_73"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_15_73"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="-4.52482" dy="3.01655" />
              <feGaussianBlur stdDeviation="1.50827" />
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
                result="effect2_innerShadow_15_73"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="1.50827" dy="-2.26241" />
              <feGaussianBlur stdDeviation="2.26241" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="effect2_innerShadow_15_73"
                result="effect3_innerShadow_15_73"
              />
            </filter>
            <clipPath id="clip0_15_73">
              <rect
                width="16.7806"
                height="16.7806"
                fill="white"
                transform="translate(0.674408 0.252563)"
              />
            </clipPath>
          </defs>
        </svg>
      </span>
      {weatherData && weatherData.location.name}
      <span>
        <svg
          width="6"
          height="5"
          viewBox="0 0 6 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.02568 4.74031L0.0590057 1.77363L1.04836 0.784973L3.02568 2.76299L5.003 0.784973L5.99236 1.77363L3.02568 4.74031Z"
            fill="white"
          />
        </svg>
      </span>
    </button>
  );
}

export default LocationBtn;
