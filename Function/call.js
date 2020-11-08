Function.prototype.myCall = function (context = window, ...args) {
  if (typeof this !== "object") {
    throw new TypeError("Error");
  }

  context.fn = this;

  const res = context.fn(...args);
  delete context.fn;

  return res;
};
