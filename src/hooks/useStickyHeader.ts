import { useState, useEffect, useRef, useCallback } from 'react';

interface StickyHeader {
  (height: number, borderWidth: number): [
    boolean,
    React.RefObject<HTMLDivElement>
  ];
}

export const useStickyHeader: StickyHeader = (height, borderWidth) => {
  const [isSticky, setSticky] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    if (ref?.current?.getBoundingClientRect()) {
      setSticky(
        Math.abs(ref.current.getBoundingClientRect().top) - borderWidth > height
      );
    }
  }, [borderWidth, height]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, [handleScroll]);

  return [isSticky, ref];
};
