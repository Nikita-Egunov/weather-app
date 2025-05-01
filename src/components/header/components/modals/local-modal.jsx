import {
  Map,
  Placemark,
  SearchControl,
  GeolocationControl,
} from "@pbe/react-yandex-maps";
import CONFIG from "/config.json";
import { useState, useEffect, useRef, useContext } from "react";
import { CordsContext } from "../../../../contexts/cordsContext";
import { PlacemarkContext } from "../../../../contexts/placemarkContext";
import { NavLink } from "react-router";
import { isGeoErrorContext } from "/src/contexts/isGeoErrorContext.js";

function LocalModal({ isOpen, onClose }) {
  const { coords, setCoords } = useContext(CordsContext);
  const { isPlacemarkVisible, setPlacemarkVisible } =
    useContext(PlacemarkContext);
  const [geoControl, setGeoControl] = useState(null);
  const mapRef = useRef(null);
  const CENTER = [55.582026, 37.3855235];
  const { isCordsError, setIsCordsError } = useContext(isGeoErrorContext);

  // Обработка геолокации через контрол
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

  const handelGeoChange = () => {
    if (!mapRef.current) return;
    mapRef.current.setCenter(coords, 15);
  };

  const handleMapClick = (e) => {
    setCoords(e.get("coords"));
    setPlacemarkVisible(true);
    setIsCordsError(false)
  };

  return (
    isOpen && (
      <>
        <div className="absolute top-0 left-0 w-full h-full bg-white z-20">
          <span className="absolute top-1/2 left-1/2 translate-1/2 border-b-2 border-b-cyan-500 rounded-full animate-spin w-5 aspect-square"></span>
        </div>
        <div className="absolute top-0 left-0 w-full h-full z-30">
          <Map
            instanceRef={mapRef}
            onClick={handleMapClick}
            className="w-full h-full"
            state={{ center: coords ? coords : CENTER, zoom: 9 }}
          >
            <SearchControl options={{ float: "right" }} />
            {!isCordsError && (
              <GeolocationControl
                onClick={handelGeoChange}
                instanceRef={setGeoControl}
                options={{ float: "left", noPlacemark: true }}
              />
            )}
            {isPlacemarkVisible && (
              <Placemark geometry={coords ? coords : CENTER} />
            )}
          </Map>
          <span className="top-[1.6%] hidden"></span>
          <span className="top-[7%] hidden"></span>
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
