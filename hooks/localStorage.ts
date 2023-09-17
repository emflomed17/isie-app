import { useEffect, useState } from "react";

const useLocalStorage = <T>(
  key: string,
  initialState: T
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [state, setState] = useState<T>(() => {
    if (typeof window !== "undefined") {
      try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : initialState;
      } catch (error) {
        console.error("Error parsing local storage data:", error);
      }
    }
    return initialState;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(key, JSON.stringify(state));
      } catch (error) {
        console.error("Error saving data to local storage:", error);
      }
    }
  }, [key, state]);

  return [state, setState];
};

export default useLocalStorage;
