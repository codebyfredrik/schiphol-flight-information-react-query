import { useEffect } from 'react';

const useKeyPress = (key, action) => {
  useEffect(() => {
    const onKeyup = () => {
      if (e.key === key) action();
    };
    window.addEventListener('keyup', onKeyup);
    return () => window.removeEventListener('keyup', onKeyup);
  });
};

export { useKeyPress };
