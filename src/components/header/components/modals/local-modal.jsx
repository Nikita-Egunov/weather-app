import {
  Map,
  Placemark,
  SearchControl,
  GeolocationControl,
} from "@pbe/react-yandex-maps";
import { useState, useEffect, useRef, useContext } from "react";
import { CordsContext } from "../../../../contexts/cordsContext";
import { PlacemarkContext } from "../../../../contexts/placemarkContext";
import { isGeoErrorContext } from "/src/contexts/isGeoErrorContext.js";

/**
 * Компонент модального окна с интерактивной картой для выбора/просмотра местоположения.
 * Использует контексты для управления координатами, состоянием метки и ошибками геолокации.
 *
 * @param {Object} props - Входные свойства компонента.
 * @param {boolean} props.isOpen - Флаг отображения модального окна.
 * @param {Function} props.onClose - Callback для закрытия модального окна.
 *
 * @returns {JSX.Element|null} JSX-элемент модального окна или null, если isOpen=false.
 */
function LocalModal({ isOpen, onClose }) {
  const { coords, setCoords } = useContext(CordsContext);
  const { isPlacemarkVisible, setPlacemarkVisible } =
    useContext(PlacemarkContext);
  const [geoControl, setGeoControl] = useState(null);
  const mapRef = useRef(null);
  const CENTER = [55.582026, 37.3855235];
  const { isCordsError, setIsCordsError } = useContext(isGeoErrorContext);

  /**
   * Эффект для подписки на событие изменения местоположения через геолокационный контрол.
   * Обновляет координаты и состояние видимости метки.
   */
  useEffect(() => {
    if (!geoControl) return;

    const handleLocationChange = (e) => {
      const position = e.get("position");
      setCoords(position);
      setPlacemarkVisible(true);
    };

    geoControl.events.add("locationchange", handleLocationChange);

    return () => {
      geoControl.events.remove("locationchange", handleLocationChange);
    };
  }, [geoControl]);

  /**
   * Обрабатывает изменение геолокации: перемещает центр карты в текущие координаты.
   */
  const handelGeoChange = () => {
    if (!mapRef.current) return;
    mapRef.current.setCenter(coords, 15);
  };

  /**
   * Обрабатывает клик по карте: сохраняет координаты клика, показывает метку,
   * сбрасывает флаг ошибки координат.
   * 
   * @param {Object} e - Событие клика на карте.
   */
  const handleMapClick = (e) => {
    setCoords(e.get("coords"));
    setPlacemarkVisible(true);
    setIsCordsError(false);
  };

  return (
    isOpen && (
      <>
        {/* Загрузочный спиннер */}
        <div className="absolute top-0 left-0 w-full h-full bg-white z-20">
          <span className="absolute top-1/2 left-1/2 translate-1/2 border-b-2 border-b-cyan-500 rounded-full animate-spin w-5 aspect-square"></span>
        </div>

        {/* Карта */}
        <div className="absolute top-0 left-0 w-full h-full z-30">
          <Map
            instanceRef={mapRef}
            onClick={handleMapClick}
            className="w-full h-full"
            state={{ center: coords ? coords : CENTER, zoom: 9 }}
          >
            <SearchControl options={{ float: "right" }} />

            {/* Контрол геолокации */}
            {!isCordsError && (
              <GeolocationControl
                onClick={handelGeoChange}
                instanceRef={setGeoControl}
                options={{ float: "left", noPlacemark: true }}
              />
            )}

            {/* Метка на карте */}
            {isPlacemarkVisible && (
              <Placemark geometry={coords ? coords : CENTER} />
            )}
          </Map>

          {/* Стилизованные пустые элементы для позиционирования кнопки */}
          <span className="top-[1.6%] hidden"></span>
          <span className="top-[7%] hidden"></span>

          {/* Кнопка закрытия */}
          <button
            onClick={onClose}
            className={`absolute top-[${isCordsError ? "1.6%" : "7%"}] left-[10px] z-40 bg-white w-7 aspect-square rounded-[5px] shadow cursor-pointer`}
          >
            <span className="absolute bottom-1/2 right-1/2 translate-1/2 border-b-2 border-b-black inline-block w-[60%] rotate-[-45deg]"></span>
            <span className="absolute bottom-1/2 right-1/2 translate-1/2 border-b-2 border-b-black inline-block w-[60%] rotate-45"></span>
          </button>
        </div>
      </>
    )
  );
}


export default LocalModal;
