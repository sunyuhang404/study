// 合并两个有序链表

import ListNode from './ListNode.js'

const mergeList = (l1, l2) => {
  let dummy = new ListNode(-1);
  let p = dummy;

  let p1 = l1;
  let p2 = l2;

  while (p1 !== null && p2 !== null) {
    if (p1.val > p2.val) {
      p.next = p2;
      p2 = p2.next
    } else {
      p.next = p1;
      p1 = p1.next;
    }
    p = p.next;
  }

  if (p1 !== null) {
    p.next = p1;
  }
  if (p2 !== null) {
    p.next = p2;
  }
  return dummy.next;
}
