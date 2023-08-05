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

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
  let slow = head;
  let fast = head.next;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // the head of the secondhalf
  let secondHalf = slow.next;
  slow.next = null;

  // merge both lists together
  let firstHalf = head;
  let secondHalf1 = reverseList(secondHalf);

  while (secondHalf1 != null) {
    let temp1 = firstHalf.next;
    let temp2 = secondHalf1.next;
    firstHalf.next = secondHalf1;
    secondHalf1.next = temp1;
    firstHalf = temp1;
    secondHalf1 = temp2;
  }
}

function reverseList(head: ListNode | null) {
  let currNode: ListNode | null = head;
  if (currNode == null) return;
  let prev = null;
  let next: ListNode | null;
  while (currNode != null) {
    next = currNode.next;
    currNode.next = prev;
    prev = currNode;
    currNode = next;
  }
  return prev;
}

// function reverseList(head: ListNode | null,) {
//     let currNode:ListNode | null = head;
//     if (currNode == null) return;
//     let prev = null;
//     let next: ListNode | null;
//     while (currNode != null) {
//         next = currNode.next;
//         currNode.next = prev;
//         prev = currNode;
//         currNode = next;
//     }
//     reverseList(prev.next)
// }
