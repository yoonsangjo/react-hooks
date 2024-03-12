import { useEffect, useRef } from 'react';

const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();

  useEffect(() => {
    if (typeof duration !== 'number' || typeof delay !== 'number') return;
    if (element.current) {
      const { current } = element;

      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, [delay, duration]);

  return { ref: element, style: { opacity: 0 } };
};

export default useFadeIn;
