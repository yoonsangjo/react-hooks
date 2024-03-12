import { useRef } from 'react';

const useFullScreen = (callback) => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      if (callback && typeof callback === 'function') {
        callback(true);
      }
    }
  };
  const exitFull = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
    if (callback && typeof callback === 'function') {
      callback(false);
    }
  };

  return { element, triggerFull, exitFull };
};

export default useFullScreen;
