import React, { useState, useCallback } from 'react';

export const useToggle = (initalValue = false) => {
  const [value, setValue] = useState(initalValue);

  const toggle = useCallback(() => {
    setValue((v) => !v);
  });

  return [value, toggle];
};
