const debounce = (fn, delay) => {
  let timeout;
  return (args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(args), delay);
  };
};

export default debounce;
