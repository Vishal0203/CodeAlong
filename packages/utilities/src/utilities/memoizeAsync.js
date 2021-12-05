const memoizeAsync = () => {
  const cache = {};
  const inProgressQueue = {};

  return (config, callback) => {
    const { url, key, duration = null } = config;

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
        cache[key] = { data, duration };
        if (duration) {
          setTimeout(() => {
            console.info(`Cleared cache for [${key}]`);
            delete cache[key];
            delete inProgressQueue[key];
          }, duration);
        }

        for (let cb of inProgressQueue[key]) {
          cb(cache[key].data);
        }
        // cleanup
        delete inProgressQueue[key];
      });
  };
};

export default memoizeAsync;
