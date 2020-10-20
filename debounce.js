function debounce(fn, time, ...args) {
  let timeout;
  return function () {
    timeout && clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, args);
    }, time);
  };
}

let num = 0;

const count = (id1, id2, id3 = 3) => {
  document.getElementById("num").innerText = num++;
  console.log(id1, id2, id3);
};

document.getElementById("num").onmousemove = debounce(count, 1000, 1, 2);
