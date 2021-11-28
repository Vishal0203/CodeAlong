import { generateHashKey } from '.';

const memoize = () => {
  const cache = {};
  return (fn, keys = []) => {
    const key = generateHashKey(keys);
    if (key && !cache.hasOwnProperty(key)) {
      cache[key] = fn.apply(this, keys);
    }

    return cache[key];
  };
};

export default memoize;
