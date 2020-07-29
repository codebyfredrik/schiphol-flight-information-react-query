import { useCallback } from 'react';
import { useStickyState } from './../hooks/useStickyState';

const useDarkMode = () => {
  const [theme, setTheme] = useStickyState('light', 'theme');
  const isDarkMode = theme === 'light' ? false : true;
  const themeToggler = useCallback(() => {
    theme === 'light' ? setTheme('dark', 'theme') : setTheme('light', 'theme');
  });

  return { themeToggler, isDarkMode };
};

export { useDarkMode };
