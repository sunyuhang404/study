
//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    const dummy1 = new ListNode(-1)
    const dummy2 = new ListNode(-1)

    let p1 = dummy1
    let p2 = dummy2

    let p = head

    while (p !== null) {
        if (p.val < x) {
            p1.next = p
            p1 = p1.next
        } else {
            p2.next = p
            p2 = p2.next
        }
        const t = p.next;
        p.next = null
        p = t
    }
    p1.next = dummy2.next
    return dummy1.next
};
//leetcode submit region end(Prohibit modification and deletion)
