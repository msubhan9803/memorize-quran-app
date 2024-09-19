import { useState, useEffect } from "react";

const getFromLocalStorage = (key: string, defaultValue: string): string => {
  const storedValue = localStorage.getItem(key);
  return storedValue ? storedValue : defaultValue;
};

export const usePersistedState = (key: string, defaultValue: string) => {
  const [value, setValue] = useState<string>(() => {
    return getFromLocalStorage(key, defaultValue);
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  const resetValue = () => setValue(defaultValue);

  return [value, setValue, resetValue] as const;
};
