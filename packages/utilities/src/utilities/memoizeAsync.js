const memoizeAsync = (() => {
  const cache = {};
  const inProgressQueue = {};

  return (config, callback) => {
    const { url, key } = config;

    if (inProgressQueue.hasOwnProperty(key)) {
      inProgressQueue[key] = [...inProgressQueue[key], callback];
      return;
    }

    if (!cache.hasOwnProperty(key)) {
      inProgressQueue[key] = [callback];
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          cache[key] = data;
          inProgressQueue[key].reduce((acc, cb) => cb(acc), cache[key]);
          // cleanup
          delete inProgressQueue[key];
        });
    } else {
      console.log('responding from cache');
      callback(cache[key]);
    }
  };
})();

export default memoizeAsync;
