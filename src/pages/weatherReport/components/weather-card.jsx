/**
 * Компонент карточки погоды с отображением температуры, иконки и времени/даты.
 * Поддерживает два режима отображения (вертикальный и горизонтальный) и выделение текущего дня.
 *
 * @param {Object} props - Входные свойства компонента.
 * @param {number} props.temperature - Температура в градусах Цельсия.
 * @param {string} props.iconUrl - URL-адрес иконки погоды.
 * @param {string} props.iconAlt - Альтернативный текст для иконки.
 * @param {string} props.time - Время или дата отображения (например, "12:00" или "Сентябрь, 5").
 * @param {boolean} props.isColumn - Флаг вертикального расположения элементов (true) или горизонтального (false).
 * @param {boolean} props.isCurrent - Флаг выделения текущего дня/времени (добавляет стили).
 *
 * @returns {JSX.Element} JSX-элемент карточки с информацией о погоде.
 */
function WeatherCard({ 
  temperature, 
  iconUrl, 
  iconAlt, 
  time, 
  isColumn, 
  isCurrent 
}) {
  return (
    <div 
      className={`p-2.5 flex gap-y-3 ${
        isColumn ? "flex-col-reverse" : "justify-between"
      } ${isCurrent && "rounded-2xl border border-white bg-[rgba(255,255,255,0.2)]"}`}
    >
      {/* Время/Дата */}
      <p className="text-shadow">{time}</p>
      
      {/* Иконка погоды */}
      <img 
        src={iconUrl} 
        alt={iconAlt} 
        className={isColumn ? "" : "w-7 aspect-square"}
      />
      
      {/* Температура */}
      <p className="text-shadow">{temperature}°C</p>
    </div>
  );
}


export default WeatherCard