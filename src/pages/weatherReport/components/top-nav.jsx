import { NavLink } from "react-router";
import CONFIG from "/config.json"

/**
 * Компонент верхней навигационной панели.
 * Отображает кнопку "Назад" с иконкой для возврата на главную страницу.
 * Использует NavLink из React Router для навигации.
 *
 * @returns {JSX.Element} JSX-элемент с кнопкой навигации.
 */
function TopNav() {
  return (
    <div className="flex justify-between">
      {/* Ссылка на главную страницу */}
      <NavLink
        to={CONFIG.app_routes.main}
        className="flex items-center gap-1.5 text-shadow"
      >
        {/* Иконка стрелки влево */}
        <svg
          width="6"
          height="11"
          viewBox="0 0 6 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.17295 5.41746L5.93006 9.17456L4.85681 10.2478L0.0264662 5.41746L4.85681 0.587107L5.93005 1.66035L2.17295 5.41746Z"
            fill="white"
          />
        </svg>
        <span>Back</span>
      </NavLink>
    </div>
  );
}


export default TopNav;
