
//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
class MinHeap {
    constructor() {
        this.heap = []
    }
    parent(i) {
        return (i - 1) >> 1
    }
    left(i) {
        return 2 * i + 1
    }
    right(i) {
        return 2 * i + 2
    }
    swap(i1, i2) {
        // [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]]
        const tmp = this.heap[i1]
        this.heap[i1] = this.heap[i2]
        this.heap[i2] = tmp
    }
    isEmpty() {
        return this.heap.length === 0
    }
    bubbleUp(i) {
        if (i === 0) {
            return

        }
        const parentIndex = this.parent(i)
        if (this.heap[parentIndex] && this.heap[i].val < this.heap[parentIndex].val) {
            this.swap(i, parentIndex)
            this.bubbleUp(parentIndex)
        }
    }
    bubbleDown(i) {
        const leftI = this.left(i)
        const rightI = this.right(i)

        if (this.heap[leftI] && this.heap[leftI].val < this.heap[i].val) {
            this.swap(i, leftI)
            this.bubbleDown(leftI)
        }

        if (this.heap[rightI] && this.heap[rightI].val < this.heap[i].val) {
            this.swap(i, rightI)
            this.bubbleDown(rightI)
        }
    }
    add(node) {
        this.heap.push(node)
        this.bubbleUp(this.heap.length - 1)
    }
    pop() {
        if (this.heap.length === 0) {
            throw new Error('empty!')
        }
        if (this.heap.length === 1) {
            return this.heap.pop()
        }
        const top = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.bubbleDown(0)
        return top
    }
}
var mergeKLists = function(lists) {
    const dummy = new ListNode(0)
    let p = dummy


    const list = new MinHeap()
    lists.forEach(node => {
        if (node) {
            list.add(node)
        }
    })

    while (!list.isEmpty()) {
        const top = list.pop()
        p.next = top
        p = p.next

        if (top.next) {
            list.add(top.next)
        }
    }
    return dummy.next
};
//leetcode submit region end(Prohibit modification and deletion)
