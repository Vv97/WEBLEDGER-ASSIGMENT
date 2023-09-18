import { useEffect, useRef, useState } from "react";

const useDebounce = (value: string = "", delay: number): string => {
  const [debounceValue, setDebounceValue] = useState<string>(value);
  const debounceRef = useRef<number>();

  useEffect(() => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(debounceRef.current);
    };
  }, [value, delay]);

  return debounceValue;
};

export default useDebounce;
