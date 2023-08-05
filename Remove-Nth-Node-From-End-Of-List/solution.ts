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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  // have a left pointer at the dummy Node initial value is an ListNode with value of 0
  // initial value of right pointer has a value of head
  // have a right pointer at a distance of n from the left pointer
  //iterate through list update both values (left and right)
  // when left pointer is immediately before right pointer assign its next value to the next of its next
  // left.next = left.next.next
  // return the new list head
  let dummy = new ListNode(0, head);
  let left: ListNode = dummy;
  let right: ListNode = head;

  while (n > 0 && right != null) {
    n -= 1;
    right = right.next;
  }

  while (right != null) {
    left = left.next;
    right = right.next;
  }
  left.next = left.next.next;

  return dummy.next;
}
