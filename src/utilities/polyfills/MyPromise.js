class MyPromise {
  resolvedData;
  rejectedData;

  resolveChain = [];
  rejectChain = [];

  isResolved = false;
  isRejected = false;

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
      this.resolveChain.reduce((acc, fn) => fn(acc), this.resolvedData);
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
