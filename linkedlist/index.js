class ListNode {
  val = null;
  next = null;

  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}
import { PriorityQueue } from '../heap/index.js'

// 1.合并两个有序链表
const merge = (l1, l2) => {
  const dummy = new ListNode(null)
  let p = dummy
  let p1 = l1;
  let p2 = l2;

  while (p1 !== null && p2 !== null) {
    if (p1.val > p2.val) {
      p.next = p2
      p2 = p2.next
    } else {
      p.next = p1
      p1 = p1.next
    }
    p = p.next
  }
  if (p1 !== null) {
    p.next = p1
  }
  if (p2 !== null) {
    p.next = p2
  }
  return dummy.next
}

// 2. 链表分割
const split = (head, x) => {
  const dummy1 = new ListNode(null);
  const dummy2 = new ListNode(null);
  let p1 = dummy1;
  let p2 = dummy2;

  let p = head;
  while (p !== null) {
    if (p.val < x) {
      p1.next = p
      p1 = p1.next
    } else {
      p2.next = p
      p2 = p2.next;
    }
    // 断开原链表
    // 防止最后结果中链表有环
    const tmp = p.next
    p.next = null
    p = tmp
  }
  p1.next = dummy2.next
  return dummy1.next
}
// 3.合并k个有序链表
const mergeKList = (lists) => {
  if (lists.length === 0) {
    return null;
  }
  const dummy = new ListNode(-1);
  let p = dummy;

  const pq = new PriorityQueue()
  for (let i = 0; i < lists.length; i++) {
    const head = lists[i]
    console.log(head)
    if (head !== null) {
      pq.enqueue(head)
    }
  }

  while(!pq.isEmpty()) {
    const node = pq.dequeue()

    if (node) {
      p.next = node
      p = p.next
      // console.log(node)
      if (node.next !== null) {
        pq.enqueue(node.next)
      }
    }
  }
  return dummy.next;
}

const res = mergeKList([[1,4,5],[1,3,4],[2,6]])
// console.log(res)
for (let i = 0; i < res.length; i++) {
  console.log(res[i])
}