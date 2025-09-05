import { isGeoErrorContext } from "/src/contexts/isGeoErrorContext.js";
import { useContext } from "react";
import { LocalModalContext } from "../contexts/localModalContext";

/**
 * Компонент модального окна ошибки получения геокоординат.
 * Отображается при отсутствии доступа к геолокации пользователя.
 * Предлагает разрешить доступ к местоположению или выбрать точку на карте.
 *
 * @returns {JSX.Element|null} JSX-элемент модального окна или null, если ошибка не активна.
 */
function CordsErrorModal() {
  const { isCordsError } = useContext(isGeoErrorContext);
  const { setIsLocalModalOpen } = useContext(LocalModalContext);

  return (
    <>
      {isCordsError && (
        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.2)] flex flex-col justify-center p-4">
          {/* Контейнер модального окна */}
          <div className="bg-white rounded-2xl p-4 text-black">
            {/* Заголовок с индикатором ошибки */}
            <p className="text-cyan-500 text-center text-5xl text-shadow">
              Упс...
            </p>

            {/* Сообщение об ошибке */}
            <p className="text-center mt-3">
              Для корректной работы приложения необходим доступ к вашему
              местоположению. Разрешите браузеру получить вашу точную геопезицию
              или выберите точку на карте
            </p>

            {/* Кнопка для перехода к карте */}
            <button
              onClick={() => setIsLocalModalOpen(true)}
              className="border-dotted border border-cyan-500 text-cyan-500 block mx-auto p-2.5 rounded-2xl mt-2.5"
            >
              Открыть карту
            </button>
          </div>
        </div>
      )}
    </>
  );
}


export default CordsErrorModal;
