function myNew(fn, ...args) {
  let obj = Object.create(fn.prototype);
  let res = fn.apply(obj, args);
  return typeof obj === "object" ? res : obj;
}
