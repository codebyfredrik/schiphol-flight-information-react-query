import { useCallback } from 'react';
import { useStickyState } from './useStickyState';

interface IDarkMode {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}

const useDarkMode = (): IDarkMode => {
  const [theme, setTheme] = useStickyState('light', 'theme');
  const isDarkMode = theme === 'light' ? false : true;
  const toggleDarkMode = useCallback(() => {
    theme === 'light' ? setTheme('dark', 'theme') : setTheme('light', 'theme');
  }, [theme, setTheme]);

  return { toggleDarkMode, isDarkMode };
};

export { useDarkMode };
