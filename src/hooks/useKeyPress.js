import { useEffect } from 'react';

const useKeyPress = (key, action) => {
  useEffect(() => {
    const onKeyup = (e) => {
      if (e.key === key) action();
    };
    window.addEventListener('keyup', onKeyup);
    return () => window.removeEventListener('keyup', onKeyup);
  }, [action, key]);
};

export { useKeyPress };
