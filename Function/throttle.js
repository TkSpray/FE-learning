function throttle(fn, time, ...args) {
  let timeout;
  return function () {
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null;
        fn.apply(this, args);
      }, time);
    }
  };
}

let num = 0;

const count = (id1, id2, id3 = 3) => {
  document.getElementById("num").innerText = num++;
  console.log(id1, id2, id3);
};

document.getElementById("num").onmousemove = throttle(count, 1000, 1, 2);
