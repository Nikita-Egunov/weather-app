import { isGeoErrorContext } from "/src/contexts/isGeoErrorContext.js";
import { useContext, useState } from "react";
import { LocalModalContext } from "../contexts/localModalContext";
import { useNavigateCoords } from "/src/hooks/useNavigateCoords.js";
import { CordsContext } from "../contexts/cordsContext";

function CordsErrorModal() {
  const { isCordsError, setIsCordsError } = useContext(isGeoErrorContext);
  const { coords, setCoords } = useContext(CordsContext);
  const { isLocalModalOpen, setIsLocalModalOpen } =
    useContext(LocalModalContext);
  const fetchCoords = useNavigateCoords();
  const [isAnimate, setIsAnimate] = useState(false);

  const getCords = async () => {
    const getCoords = useNavigateCoords();
    const fetchLocation = async () => {
      try {
        const { latitude, longitude } = await getCoords();
        setCoords([latitude, longitude]);
      } catch (error) {
        setIsCordsError(true);
        setIsAnimate(true);
        setTimeout(() => {
          setIsAnimate(false);
        }, 500);
      }
    };
    fetchLocation()
  };

  return (
    <>
      {isCordsError && (
        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.2)] flex flex-col justify-center p-4">
          <div className="bg-white rounded-2xl p-4 text-black">
            <p className="text-cyan-500 text-center text-5xl text-shadow">
              Упс...
            </p>
            <p className="text-center mt-3">
              Для корректной работы приложения необходим доступ к вашему
              местоположению. Разрешите браузеру получить вашу точную геопезицию
              или выберите точку на карте
            </p>
            <button
              onClick={() => {
                getCords();
              }}
              className={`${
                isAnimate && "animate-error"
              } rounded-2xl p-2.5 bg-cyan-500 text-white block mx-auto mt-2.5`}
            >
              Запросить геопозицию ещё раз
            </button>
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
