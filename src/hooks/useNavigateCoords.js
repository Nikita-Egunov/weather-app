export function useNavigateCoords() {
  const fetchCoords = async () => {
    if (!("geolocation" in navigator)) {
      throw new Error("Геолокация не поддерживается");
    }

    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, {
        enableHighAccuracy: true,
        timeout: 10000
      });
    });

    return {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    };
  };

  return fetchCoords;
}