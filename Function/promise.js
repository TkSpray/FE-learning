const PENDING = "pending";
const RESOLVED = "resolved";
const REJECTED = "rejected";

function myPromise(fn) {
  this.state = PENDING;
  this.val = "";

  const resolve = val => {
    this.state = RESOLVED;
    this.val = val;
  };

  const reject = val => {
    this.state = REJECTED;
    this.val = val;
  };

  this.then = (onFulfill, onReject) => {
    this.state == RESOLVED ? onFulfill(this.val) : onReject(this.val);
  };

  try {
    fn(resolve, reject);
  } catch (e) {
    reject(e);
  }
}
