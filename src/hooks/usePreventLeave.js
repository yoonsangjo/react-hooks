const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.resultValue = '';
  };
  const enablePrevent = () => window.addEventListener('beforeunload', listener);
  const disablePrevent = () => window.removeEventListener('beforeunload', listener);

  return { enablePrevent, disablePrevent };
};

export default usePreventLeave;
