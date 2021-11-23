import { generateHashKey } from '.';

const memoize = (() => {
  const memoMap = new Map();
  return (fn, keys = []) => {
    const key = generateHashKey(keys);
    if (key && !memoMap.has(key)) {
      memoMap.set(key, fn());
    }

    return memoMap.get(key);
  };
})();

export default memoize;
