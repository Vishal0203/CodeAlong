const memoizeAsync = () => {
  const cache = {};
  const inProgressQueue = {};

  setInterval(() => {
    const currentTime = Date.now();
    for (let key in cache) {
      const { duration, insertedAt } = cache[key];
      if (currentTime - insertedAt >= duration) {
        console.info(`Cleared cache for [${key}]`);
        delete cache[key];
        delete inProgressQueue[key];
      }
    }
  }, 2000);

  return (config, callback) => {
    const { url, key, duration } = config;

    if (cache.hasOwnProperty(key)) {
      console.log(`Reading from cache for key [${key}]`);
      callback(cache[key].data);
      return;
    }

    if (inProgressQueue.hasOwnProperty(key)) {
      inProgressQueue[key].push(callback);
      return;
    } else {
      inProgressQueue[key] = [callback];
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        cache[key] = { data, duration, insertedAt: Date.now() };
        inProgressQueue[key].reduce((acc, cb) => cb(acc), cache[key].data);
        // cleanup
        delete inProgressQueue[key];
      });
  };
};

export default memoizeAsync;
