import { generateHashKey } from '.';

const memoize = () => {
  const cache = {};
  return (fn, args = []) => {
    const key = generateHashKey(args);
    if (key && !cache.hasOwnProperty(key)) {
      cache[key] = fn.apply(null, args);
    }

    return cache[key];
  };
};

export default memoize;
