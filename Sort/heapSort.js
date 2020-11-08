function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function heapify(arr, size, i) {
  //大顶堆
  while (true) {
    let maxIndex = i;
    if (2 * i <= size && arr[i] < arr[i * 2]) maxIndex = i * 2;
    if (2 * i + 1 <= size && arr[i] < arr[i * 2 + 1]) maxIndex = i * 2 + 1;
    if (i === maxIndex) break;
    swap(arr, i, maxIndex);
    i = maxIndex;
  }
}

function buildHeap(arr, size) {
  for (let i = Math.floor(size / 2); i >= 1; --i) {
    heapify(arr, size, i);
  }
}

function heapSort(arr) {
  let heapSize = arr.length - 1;
  buildHeap(arr, heapSize);
  //排序
  for (let i = heapSize; i > 1; i--) {
    swap(item, 1, i);
    heapSize--;
    heapify(arr, heapSize, 1);
  }
  return arr;
}
