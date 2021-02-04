//归并
function mergeSort(arr) {
    let len = arr.length
    if (len < 2) return arr

    let mid = Math.floor(len / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)

    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    let res = []

    while (left.length > 0 && right.length > 0) {
        if (left[0] <= right[0]) res.push(left.shift())
        else res.push(right.shift())
    }

    while (left.length) res.push(left.shift())
    while (right.length) res.push(right.shift())

    return res
}
