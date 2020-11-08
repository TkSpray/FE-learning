Function.prototype.myApply = function (context = window, args = []) {
  if (typeof this !== "object") {
    throw new TypeError("error");
  }

  context.fn = this;

  const res = context.fn(...args);
  delete context.fn;

  return res;
};
