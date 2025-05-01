import { useState, useEffect } from "react";

export const useLocalStorage = (key, initialValue) => {
  const getStoredValue = (storedKey) => {
    const useKey = storedKey !== undefined ? useKey : key
    try {
      const item = localStorage.getItem(useKey);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Ошибка чтения данных из localStorage", error);
      return initialValue;
    }
  };

  const [storedValue, setStoredValue] = useState(getStoredValue);

  const setValue = (value, newKey) => {
    const keyToUse = newKey !== undefined ? newKey : key;
    try {
      setStoredValue(value);
      localStorage.setItem(keyToUse, JSON.stringify(value));
    } catch (error) {
      console.error("Ошибка добавления в localStorage", error);
    }
  };

  const removeValue = (newKey) => {
    const keyToUse = newKey !== undefined ? newKey : key;
    try {
      localStorage.removeItem(keyToUse);
      setStoredValue(initialValue);
    } catch (error) {
      console.error("Ошибка удаления из localStorage", error);
    }
  };

  const removeAll = () => {
    localStorage.clear();
  }

  useEffect(() => {
    setStoredValue(getStoredValue());
  }, [key]);

  return [storedValue, setValue, removeValue, getStoredValue, removeAll];
};
