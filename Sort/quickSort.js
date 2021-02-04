//快排
function quickSort(arr) {
    if (arr.length <= 1) return arr
    let left = [],
        right = [],
        cur = arr.splice(0, 1)
    arr.forEach(item => {
        item < cur ? left.push(item) : right.push(item)
    })
    return quickSort(left).concat(cur, quickSort(right))
}

//测试
let arr = [1, 3, 2, 5, 4]
let temp = quickSort(arr)
console.log(temp) // [1, 2, 3, 4, 5]
// 第 2 个最大值
console.log(temp[temp.length - 2]) // 4
