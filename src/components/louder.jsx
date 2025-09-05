/**
 * Компонент индикатора загрузки (лодер).
 * Отображает вращающийся элемент, сигнализирующий о выполнении фоновой операции.
 *
 * @returns {JSX.Element} JSX-элемент вращающегося индикатора загрузки.
 */
function Louder() {
  return (
    <span className="mx-auto block w-7 aspect-square rounded-full border-b-2 border-b-white animate-spin"></span>
  );
}
