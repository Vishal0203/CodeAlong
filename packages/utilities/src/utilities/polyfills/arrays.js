Array.prototype.myMap = function (callback, thisArg) {
  let result = [],
    index = 0,
    length = this.length;

  while (index < length) {
    result[index] = callback.call(thisArg, this[index], index, this);
    index += 1;
  }

  return result;
};

Array.prototype.myFilter = function (callback, thisArg) {
  let result = [],
    index = 0,
    length = this.length;

  while (index < length) {
    if (callback.call(thisArg, this[index], index, this)) {
      result.push(this[index]);
    }
    index += 1;
  }

  return result;
};

Array.prototype.myReduce = function (callback, init, thisArg) {
  let acc = init,
    index = 0,
    length = this.length;

  while (index < length) {
    acc = callback.call(thisArg, acc, this[index], index, this);
    index += 1;
  }

  return acc;
};
