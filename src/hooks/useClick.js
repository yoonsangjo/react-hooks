import { useEffect, useRef } from 'react';

const useClick = (onClick) => {
  const ref = useRef();

  useEffect(() => {
    const element = ref;
    if (typeof onClick !== 'function') {
      return;
    }

    if (element.current) {
      element.current.addEventListener('click', onClick);
    }

    return () => {
      if (element.current) {
        element.current.removeEventListener('click', onClick);
      }
    };
  }, [onClick]);

  // return element;
  return ref;
};

export default useClick;
