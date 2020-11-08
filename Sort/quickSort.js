let quickSort = arr => {
  quick(arr, 0, arr.length - 1);
};

let quick = (arr, left, right) => {
  if (left < right) {
    let index = partition(arr, left, right);
    if (left < index - 1) quick(arr, left, index - 1);
    if (right > index) quick(arr, index, right);
  }
};

let partition = (arr, left, right) => {
  let temp = arr[Math.floor(Math.random() * (right - left + 1)) + left],
    i = left,
    j = right;

  while (i <= j) {
    while (arr[i] < temp) i++;
    while (arr[j] > temp) j--;
    if (i <= j) {
      swap(arr, i, j);
      i++;
      j--;
    }
  }
  return i;
};

let swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

//测试
let arr = [1, 3, 2, 5, 4];
quickSort(arr);
console.log(arr); // [1, 2, 3, 4, 5]
// 第 2 个最大值
console.log(arr[arr.length - 2]); // 4
