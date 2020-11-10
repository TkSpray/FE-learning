function isPromise(obj) {
  return (
    !!obj &&
    (typeof obj === "function" || typeof obj === "object") &&
    typeof obj.then == "function"
  );
}

function myPromiseAll(arr) {
  let result = [];
  return new Promise((res, rej) => {
    for (let i = 0; i < arr.length; i++) {
      if (isPromise(arr[i])) {
        arr[i]
          .then(data => {
            result[i] = data;
            if (result.length === arr.length) {
              res(result);
            }
          })
          .catch(err => {
            rej(err);
          });
      } else {
        result[i] = arr[i];
      }
    }
  });
}

const curry = (fn, args1 = []) => (...args2) =>
  (arg => (arg.length === fn.length ? fn(...arg) : curry(fn, arg)))([
    ...args1,
    ...args2
  ]);
