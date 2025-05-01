import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import postcssPxtorem from "postcss-pxtorem";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    postcssPxtorem({
      rootValue: 16, // Базовый размер шрифта (1rem = 16px)
      propList: ["*"], // Применять ко всем свойствам, содержащим px
      unitPrecision: 5, // Количество знаков после запятой
      selectorBlackList: [], // Игнорировать селекторы (например, .ignore-class)
      replace: true, // Заменять значения на rem
      mediaQuery: false, // Не обрабатывать медиа-запросы
      minPixelValue: 0, // Минимальное значение для конвертации
    }),
  ],

  server: {
    host: "0.0.0.0", // Делаем сервер доступным в локальной сети
    port: 5173, // Порт (можно указать любой другой)
  },
  build: {
    minify: "terser", // Минификация JavaScript с использованием Terser
    terserOptions: {
      compress: {
        drop_console: true, // Удалить console.log
        drop_debugger: true, // Удалить debugger
        pure_funcs: ["console.log"], // Удалить только console.log
      },
      format: {
        comments: false, // Удалить все комментарии
      },
      mangle: {
        toplevel: true, // Сокращать имена переменных и функций
      },
    },
  },
});

// npm i terser
