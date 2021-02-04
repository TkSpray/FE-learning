/**
 *             1
 *           2   7
 *          3   8 9
 *         4       10
 *        5 6     11 12
 */
const treeData = {
    value: 1,
    left: {
        value: 2,
        left: {
            value: 3,
            left: {
                value: 4,
                left: {
                    value: 5
                },
                right: {
                    value: 6
                }
            }
        }
    },
    right: {
        value: 7,
        right: {
            value: 9,
            right: {
                value: 10,
                left: {
                    value: 11
                },
                right: {
                    value: 12
                }
            }
        },
        left: {
            value: 8
        }
    }
}

//广度优先
const bfs = node => {
    const list = []
    if (node) {
        let queue = [node]
        while (queue.length) {
            let item = queue.shift()
            list.push(item.value)
            item.left && queue.push(item.left)
            item.right && queue.push(item.right)
        }
    }
    return list
}

//深度优先递归
const dfs1 = (node, list) => {
    if (node) {
        list.push(node.value)
        node.left && dfs1(node.left, list)
        node.right && dfs1(node.right, list)
    }
    return list
}

//深度优先非递归
const dfs2 = node => {
    const list = []
    if (node) {
        let stack = [node]
        while (stack.length) {
            let item = stack.pop()
            list.push(item.value)
            item.right && stack.push(item.right)
            item.left && stack.push(item.left)
        }
    }
    return list
}

const result = bfs(treeData)
const dfsres1 = dfs1(treeData, [])
const dfsres2 = dfs2(treeData)

console.log('result', result, 'dfs1', dfsres1, 'dfs2', dfsres2) //1 2 7 3 8 9 4 10 5 6 11 12

// const dfs = (node,list) => {
//   if(node){
//     list.push(node)
//     let children = node.children

//   }
// }
