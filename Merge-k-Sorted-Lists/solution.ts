/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (lists == null || lists.length == 0) return null;
  while (lists.length > 1) {
    let mergedLists = [];
    for (let i = 0; i < lists.length; i += 2) {
      let l1 = lists[i];
      let l2 = i + 1 < lists.length ? lists[i + 1] : null;
      mergedLists.push(mergeLists(l1, l2));
    }
    lists = mergedLists;
  }
  return lists[0] || null;
}

function mergeLists(l1: ListNode | null, l2: ListNode | null) {
  let dummyNode = new ListNode();
  let tail: ListNode = dummyNode;

  while (l1 != null && l2 != null) {
    if (l1.val > l2.val) {
      tail.next = l2;
      l2 = l2.next;
    } else {
      tail.next = l1;
      l1 = l1.next;
    }
    tail = tail.next;
  }
  if (l1 != null) {
    tail.next = l1;
  }
  if (l2 != null) {
    tail.next = l2;
  }
  return dummyNode.next;
}
