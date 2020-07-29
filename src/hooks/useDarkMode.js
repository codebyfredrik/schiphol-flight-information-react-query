import { useCallback } from 'react';
import { useStickyState } from './../hooks/useStickyState';

const useDarkMode = () => {
  const [theme, setTheme] = useStickyState('light', 'theme');
  const isDarkMode = theme === 'light' ? false : true;
  const darkModeToggler = useCallback(() => {
    theme === 'light' ? setTheme('dark', 'theme') : setTheme('light', 'theme');
  }, [theme, setTheme]);

  return { darkModeToggler, isDarkMode };
};

export { useDarkMode };
