const PENDING = "pending";
const RESOLVED = "resolved";
const REJECTED = "rejected";

function myPromise(fn) {
  this.state = PENDING;
  this.resCallback = [];
  this.rejCallback = [];

  resolve = (val) => {
    this.state = RESOLVED;

    this.resCallback.map((callback) => callback(val));
  };

  reject = (val) => {
    this.state = REJECTED;
    this.rejCallback.map((callback) => callback(val));
  };

  try {
    fn(resolve, reject);
  } catch (e) {
    reject(e);
  }
}

myPromise.prototype.then = function (onFulfilled, onRejected) {};
