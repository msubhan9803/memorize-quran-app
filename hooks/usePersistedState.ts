import { useState, useEffect } from "react";

export const isLocalStorageAvailable = (): boolean => {
  try {
    if (typeof window !== "undefined" && window.localStorage) {
      return true;
    }
    return false;
  } catch {
    return false;
  }
};

const getFromLocalStorage = (key: string, defaultValue: string): string => {
  if (!isLocalStorageAvailable()) {
    return defaultValue;
  }

  const storedValue = localStorage.getItem(key);
  return storedValue ? storedValue : defaultValue;
};

export const usePersistedState = (key: string, defaultValue: string) => {
  const [value, setValue] = useState<string>(() => {
    return getFromLocalStorage(key, defaultValue);
  });

  useEffect(() => {
    if (isLocalStorageAvailable()) {
      localStorage.setItem(key, value);
    }
  }, [key, value]);

  const resetValue = () => setValue(defaultValue);

  return [value, setValue, resetValue] as const;
};
