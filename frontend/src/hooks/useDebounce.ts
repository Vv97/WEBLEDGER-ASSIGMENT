import { useEffect, useState } from "react";

const useDebounce = (value: string = "", delay: number): string => {
  const [debounceValue, setDebounceValue] = useState<string>(value);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [value, delay]);

  return debounceValue;
};

export default useDebounce;
