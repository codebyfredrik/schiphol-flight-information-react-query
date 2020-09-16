import { useState, useCallback } from 'react';

export const useToggle = (
  initalValue: boolean = false
): [boolean, () => void] => {
  const [value, setValue] = useState(initalValue);

  const toggle = useCallback(() => {
    setValue((v) => !v);
  }, []);

  return [value, toggle] /*as const*/;
};
