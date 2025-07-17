export default function getWeatherData({ isCordsError, coords, prevCoordsRef, setWeatherData, fetchWeatherData }) {


  if (isCordsError) return; //Если есть ошибка по координатам ничего не делаем
  if (!coords) return; // Если координаты ещё не загружены, ничего не делаем

  const prevCoords = prevCoordsRef.current;
  const areCoordsEqual =
    prevCoords && coords[0] === prevCoords[0] && coords[1] === prevCoords[1];

  if (areCoordsEqual) return; // сравнение текущих координат и определённых ранее

  try {
    // ищем данные в localStorage
    const item = localStorage.getItem(coords);
    if (item) {
      const storageWeatherData = JSON.parse(item);
      setWeatherData(storageWeatherData); // сохраняем в localStorage (кастомный хук)
      return;
    }
  } catch (error) { }
  fetchWeatherData(); // если все проверки пройдены,запрашиваем данные с сервера
  console.log(isCordsError);

  prevCoordsRef.current = coords; // Обновляем предыдущие координаты
}
