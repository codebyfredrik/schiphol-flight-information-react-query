import { useState, useEffect, useRef } from 'react';

export const useSticky = (height: number, borderWidth: number) => {
  const [isSticky, setSticky] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  });

  const handleScroll = () => {
    if (ref?.current?.getBoundingClientRect()) {
      setSticky(
        Math.abs(ref.current.getBoundingClientRect().top) - borderWidth > height
      );
    }
  };

  return [isSticky, ref];
};
