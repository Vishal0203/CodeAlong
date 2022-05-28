class MyPromise {
  resolvedData;
  rejectedData;

  resolveChain = [];
  rejectChain = [];

  isResolved = false;
  isRejected = false;

  static all(promises) {
    const fulfilled = [];
    const results = [];

    return new MyPromise((resolve, reject) => {
      promises.forEach((promise, index) => {
        promise
          .then((data) => {
            fulfilled.push(true);
            results[index] = data;

            if (fulfilled.length === promises.length) {
              resolve(results);
            }
          })
          .catch((error) => {
            reject(error);
          });
      });
    });
  }

  static resolve(value) {
    return new MyPromise((resolve) => resolve(value));
  }

  static reject(value) {
    return new MyPromise((_resolve, reject) => reject(value));
  }

  constructor(executor) {
    const resolve = (value) => {
      this.resolvedData = value;
      this.isResolved = true;

      if (this.resolveChain.length) {
        this.resolveChain.reduce((acc, fn) => fn(acc), this.resolvedData);
      }
    };

    const reject = (value) => {
      this.rejectedData = value;
      this.isRejected = true;

      if (this.rejectChain.length) {
        this.rejectChain.reduce((acc, fn) => fn(acc), this.rejectedData);
      }
    };

    executor(resolve, reject);
  }

  then(fn) {
    this.resolveChain.push(fn);
    if (this.isResolved) {
      this.resolveChain.reduce((acc, fn) => {
        fn(acc);
        this.resolveChain.pop();
      }, this.resolvedData);
    }

    return this;
  }

  catch(fn) {
    this.rejectChain.push(fn);
    if (this.isRejected) {
      this.rejectChain.reduce((acc, fn) => fn(acc), this.rejectedData);
    }

    return this;
  }

  finally(fn) {
    this.resolveChain.push(fn);
    this.rejectChain.push(fn);

    if (this.isResolved) {
      this.resolveChain.reduce((acc, fn) => fn(acc), this.resolvedData);
    }

    if (this.isRejected) {
      this.rejectChain.reduce((acc, fn) => fn(acc), this.rejectedData);
    }
  }
}

export default MyPromise;
