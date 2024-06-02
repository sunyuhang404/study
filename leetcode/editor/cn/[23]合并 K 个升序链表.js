
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
        return (i - 1) / 2
    }
    left(i) {
        return 2 * i + 1
    }
    right(i) {
        return 2 * i + 2
    }
    swap(i1, i2) {
        [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]]
    }
    isEmpty() {
        return this.heap.length === 0
    }
    bubbleUp(i) {
        const parentIndex = this.parent(i)
        if (this.heap[parentIndex] && this.heap[i] < this.heap[parentIndex]) {
            this.swap(i, parentIndex)
            this.bubbleUp(parentIndex)
        }
    }
    bubbleDown(i) {
        const leftI = this.left(i)
        if (this.heap[leftI] && this.heap[leftI] < this.heap[i]) {
            this.swap(i, leftI)
            this.bubbleDown(leftI)
        }
        const rightI = this.right(i)
        if (this.heap[rightI] && this.heap[rightI] < this.heap[i]) {
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
        const top = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.bubbleDown(0)
        return top
    }
}
var mergeKLists = function(lists) {
    const dummy = new ListNode(-1)
    let p = dummy


    const list = new MinHeap()
    lists.forEach(node => {
        list.add(node)

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
