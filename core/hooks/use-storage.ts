import { useCallback, useEffect, useState } from "react";

const useStorage = {
  useLocalStorage: <TValue>({
    key,
    value: _value,
  }: {
    key: string;
    value?: TValue;
  }) => {
    const [value, setValue] = useState<TValue | undefined>(() => {
      if (typeof window === "undefined") return _value;
      const jsonValue = window.localStorage.getItem(key);
      if (jsonValue !== null) return JSON.parse(jsonValue);
  
      if (typeof _value === "function") {
        return _value();
      } else {
        return _value;
      }
    });
  
    useEffect(() => {
      if (typeof window === "undefined") return;
      if (value === undefined) return window.localStorage.removeItem(key);
      localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
  
    const removeValue = useCallback(() => {
      setValue(undefined);
    }, []);
  
    return [value, setValue, removeValue] as const;
  }
}

export default useStorage;
