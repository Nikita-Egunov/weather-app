import sun from "/public/svg/sun-b.svg";
import rain from "/public/svg/raini-b.svg";
import windy from "/public/svg/windy-b.svg";
import { useState } from "react";

/**
 * Компонент аккордеона уведомления с возможностью раскрытия/закрытия содержимого.
 * Отображает информацию о погоде, времени и текстовое сообщение.
 *
 * @param {Object} props - Входные свойства компонента.
 * @param {boolean} props.isNew - Флаг, определяющий статус "новое" уведомление.
 * @param {string} props.text - Основной текст уведомления.
 * @param {string} props.time - Время уведомления.
 * @param {number} props.weatherCod - Код погоды (1 - солнце, 2 - дождь, 3 - ветер).
 * @param {string} props.accarderonText - Дополнительный текст, отображаемый при раскрытии.
 *
 * @returns {JSX.Element} JSX-элемент аккордеона.
 */
function NotifAccardeon({ isNew, text, time, weatherCod, accarderonText }) {
  const [isOpen, setIsOpen] = useState(false);
  let weather = undefined;
  let alt = undefined;

  /**
   * Определяет изображение и альтернативный текст в зависимости от кода погоды.
   */
  switch (weatherCod) {
    case 1:
      weather = sun;
      alt = "sun";
      break;
    case 2:
      weather = rain;
      alt = "rain";
      break;
    case 3:
      weather = windy;
      alt = "windy";
      break;
    default:
      break;
  }

  return (
    <>
      <div
        className={`py-2.5 px-5 cursor-pointer flex items-center gap-4 text-slate-400 ${isNew ? "bg-[rgba(149,229,255,0.28)] text-slate-600" : ""
          }`}
        onClick={() => {
          setIsOpen(isOpen ? false : true);
        }}
      >
        <img className="w-5 aspect-square" src={weather} alt={alt} />
        <div>
          <p className="font-light text-[13px]">{time}</p>
          <p className="font-bold">{text}</p>
        </div>
        <button
          className={
            `w-6 aspect-square duration-200` + " " + `${isOpen && "rotate-180"}`
          }
        >
          <svg
            width="8"
            height="5"
            viewBox="0 0 8 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              d="M3.7641 3.09894L0.946274 0.281109L0.141342 1.08604L3.7641 4.7088L7.38686 1.08604L6.58193 0.281109L3.7641 3.09894Z"
              fill={isNew ? "#444E72" : "#838BAA"}
            />
          </svg>
        </button>
      </div>
      <div
        className={
          `duration-200 overflow-hidden` + " " + `${isOpen ? "h-fit py-2.5 px-5" : "h-0"}` + " " + `${isNew ? "" : "text-slate-400"}`
        }
      >
        <p>{accarderonText}</p>
      </div>
    </>
  );
}

export default NotifAccardeon;
