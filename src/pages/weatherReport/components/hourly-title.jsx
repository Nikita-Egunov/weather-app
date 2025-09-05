import CONFIG from "/config.json"

/**
 * Компонент заголовка раздела "Погода по часам".
 * Отображает текущую дату в формате "Today, Месяц День".
 * Использует данные о локальном времени из контекста погоды.
 *
 * @param {Object} props - Входные свойства компонента.
 * @param {Object} props.weatherData - Объект данных о погоде, содержащий информацию о локальном времени.
 * @param {string} props.weatherData.location.localtime - Строка с локальным временем в формате "YYYY-MM-DD HH:MM".
 *
 * @returns {JSX.Element|null} JSX-элемент заголовка или null при отсутствии данных.
 */
function HourlyTitle({ weatherData }) {
  // Прерывание выполнения при отсутствии данных о погоде
  if (!weatherData) {
    return;
  }

  // Разделение строки с датой и временем
  const number = weatherData.location.localtime.split(" ");
  const numberPurt = number[0]; // Получение только даты
  const monthNumberPats = numberPurt.split("-"); // Разбиение даты на компоненты [год, месяц, день]

  return (
    <div className="flex justify-between mt-8">
      <p className="text-2xl font-black text-shadow">Today</p>
      <p className="text-shadow font-medium">
        {CONFIG.months[monthNumberPats[1]] + ", " + monthNumberPats[2]}
      </p>
    </div>
  );
}


export default HourlyTitle