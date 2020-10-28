Function.prototype.myApply = function (context = window, args = []) {
  if (typeof this !== "object") {
    throw new TypeError("error");
  }

  context.fn = this;

  const res = args.length ? context.fn(...args) : context.fn();
  delete context.fn;

  return res;
};
