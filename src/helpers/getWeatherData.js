/**
 * Функция для получения данных о погоде с учетом кэширования и проверки координат.
 * Выполняет следующие задачи:
 * 1. Проверяет наличие ошибок геолокации
 * 2. Сравнивает текущие координаты с предыдущими
 * 3. Использует локальное хранилище для кэширования данных
 * 4. Вызывает серверный запрос только при необходимости
 *
 * @param {Object} props - Входные параметры функции
 * @param {boolean} props.isCordsError - Флаг ошибки получения координат
 * @param {number[]} props.coords - Текущие геокоординаты [широта, долгота]
 * @param {React.RefObject<number[]>} props.prevCoordsRef - Ссылка на предыдущие координаты
 * @param {Function} props.setWeatherData - Callback для установки данных о погоде
 * @param {Function} props.fetchWeatherData - Функция получения данных с сервера
 */
export default function getWeatherData({
  isCordsError,
  coords,
  prevCoordsRef,
  setWeatherData,
  fetchWeatherData
}) {
  // Прерывание выполнения при наличии ошибки координат
  if (isCordsError) return;

  // Прерывание выполнения при отсутствии координат
  if (!coords) return;

  const prevCoords = prevCoordsRef.current;
  const areCoordsEqual =
    prevCoords && coords[0] === prevCoords[0] && coords[1] === prevCoords[1];

  // Прерывание выполнения при совпадении текущих и предыдущих координат
  if (areCoordsEqual) return;

  try {
    // Попытка загрузить данные из localStorage
    const item = localStorage.getItem(coords);
    if (item) {
      const storageWeatherData = JSON.parse(item);
      setWeatherData(storageWeatherData); // Сохранение из кэша
      return;
    }
  } catch (error) {
    console.error('Ошибка при работе с localStorage:', error);
  }

  // Вызов серверного API при необходимости
  fetchWeatherData();
  console.log(isCordsError);

  // Обновление ссылки на последние координаты
  prevCoordsRef.current = coords;
}
