/**
 * Definition for singly-linked list.
 * class ListNode {
 *   int val;
 *   ListNode? next;
 *   ListNode([this.val = 0, this.next]);
 * }
 */
class Solution {
  ListNode? mergeKLists(List<ListNode?> lists) {
    if (lists == null || lists.length == 0) return null;
    while (lists.length > 1) {
      List<ListNode?> mergedLists = [];
      for (int i = 0; i < lists.length; i += 2) {
        ListNode? l1 = lists[i];
        ListNode? l2 = i + 1 < lists.length ? lists[i + 1] : null;
        mergedLists.add(mergeLists(l1, l2));
      }
      lists = mergedLists;
    }
    return lists[0];
  }

  ListNode? mergeLists(ListNode? l1, ListNode? l2) {
    ListNode dummyNode = new ListNode();
    ListNode tail = dummyNode;

    while (l1 != null && l2 != null) {
      if (l2.val > l1.val) {
        tail.next = l1;
        l1 = l1.next;
      } else {
        tail.next = l2;
        l2 = l2.next;
      }
      tail = tail.next!;
    }
    if (l1 != null) {
      tail.next = l1;
    } else {
      tail.next = l2;
    }
    return dummyNode.next;
  }
}
