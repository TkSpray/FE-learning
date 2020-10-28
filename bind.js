Function.prototype.myApply = function (context = window, args = []) {
  if (typeof this !== "object") {
    throw new TypeError("error");
  }

  return (...args2) => {
    this.apply(context, [...args, ...args2]);
  };
};
