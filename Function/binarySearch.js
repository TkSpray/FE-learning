//二分查找
function binarySearch(arr, target, left, right) {
    let mid = Math.floor((left + right) / 2)
    if (arr[mid] === target) return true
    return target > arr[mid]
        ? binarySearch(arr, target, mid + 1, right)
        : binarySearch(arr, target, left, mid - 1)
}
