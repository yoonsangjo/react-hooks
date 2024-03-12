import { useEffect, useRef } from 'react';

const useHover = (onHover) => {
  const ref = useRef();

  useEffect(() => {
    const element = ref;
    if (typeof onHover !== 'function') {
      return;
    }

    if (element.current) {
      element.current.addEventListener('mouseenter', onHover);
    }

    return () => {
      if (element.current) {
        element.current.removeEventListener('mouseenter', onHover);
      }
    };
  }, [onHover]);

  // return element;
  return ref;
};

export default useHover;
