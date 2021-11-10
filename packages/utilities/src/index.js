import MyPromise from '@polyfills/MyPromise';

new MyPromise((resolve) => {
  setTimeout(() => {
    resolve(10);
  }, 1000);
}).then((data) => {
  new MyPromise((resolve, reject) => {
    setTimeout(() => {
      reject("That's what she said");
    }, 1000);
  })
    .catch((error) => {
      return `${error} ${data} times! ☹️`;
    })
    .catch((error) => {
      console.log(error);
    });
});
