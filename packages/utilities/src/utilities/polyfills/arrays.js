Array.prototype.myMap = function (cb) {
  let result = [];
  if (!this.length) {
    return result;
  }

  return [cb(this.shift())].concat(this.myMap(cb));
};
