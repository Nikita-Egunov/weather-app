/**
 * Компонент универсальной кнопки с текстом и иконкой.
 * Использует базовые стили с возможностью расширения через параметр classes.
 *
 * @param {Object} props - Входные свойства компонента.
 * @param {string} props.text - Текст, отображаемый внутри кнопки.
 * @param {string} [props.classes] - Дополнительные CSS-классы для кастомизации внешнего вида.
 *
 * @returns {JSX.Element} JSX-элемент кнопки с текстом и иконкой.
 */
function Button({ text, classes }) {
  return (
    <button
      className={
        "text-slate-600 bg-white rounded-2xl py-3 px-5 flex items-center [box-shadow:inset_-4px_3px_3px_0_rgba(255,255,255,0.25),inset_1px_-2px_4px_0_rgba(0,0,0,0.25),-3px_6px_35px_3px_rgba(0,0,0,0.1)] cursor-pointer" +
        " " +
        classes
      }
    >
      {text}
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.1948 8.93258L6.73377 5.47157L7.72242 4.48291L12.1721 8.93258L7.72242 13.3822L6.73376 12.3936L10.1948 8.93258Z"
          fill="#444E72"
        />
      </svg>
    </button>
  );
}


export default Button;
