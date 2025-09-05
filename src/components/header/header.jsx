import { useContext } from "react";
import LocationBtn from "./components/location-btn";
import LocalModal from "./components/modals/local-modal";
import { LocalModalContext } from "../../contexts/localModalContext";

/**
 * Компонент верхнего заголовка приложения.
 * Содержит кнопку выбора местоположения и модальное окно карты.
 *
 * @returns {JSX.Element} JSX-элемент заголовка с кнопкой и модальным окном.
 */
function Header() {
  const { isLocalModalOpen, setIsLocalModalOpen } = useContext(LocalModalContext);

  return (
    <header className="flex justify-between pt-10">
      {/* Кнопка выбора местоположения */}
      <LocationBtn handelClick={() => setIsLocalModalOpen(true)} />

      {/* Модальное окно карты */}
      <LocalModal
        isOpen={isLocalModalOpen}
        onClose={() => setIsLocalModalOpen(false)}
      />
    </header>
  );
}


export default Header;
