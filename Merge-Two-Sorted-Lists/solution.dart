/**
 * Definition for singly-linked list.
 * class ListNode {
 *   int val;
 *   ListNode? next;
 *   ListNode([this.val = 0, this.next]);
 * }
 */
class Solution {
  ListNode? mergeTwoLists(ListNode? list1, ListNode? list2) {
    // initialize a new instance of the list called dummylist
    //create a new variable called currentNode and assign it to dummyList
    // iterate through both lists, with the condition while both lists are null
    // in the while loop there will be a condition , if the value of the first list is less than the value of the second list
    // then you will set the next property of the curentNode variable to the first list
    // then update the first list to its next property
    //   in the else case , you will do it for the second list
    // then update the currentNode itself to its currentNode.next
    // then after iteration you will check if there are anymore nodes left in list1 and list 2
    // then set the next property of the currentnode to the remaining list

    // after return the head of the list by calling dummyList.next
    ListNode? head = ListNode(0);
    ListNode? currentNode = head;
    while (list1 != null && list2 != null) {
      if (list1.val < list2.val) {
        currentNode!.next = list1;
        list1 = list1!.next;
      } else {
        currentNode!.next = list2;
        list2 = list2!.next;
      }
      currentNode = currentNode!.next;
    }
    if (list1 != null) {
      currentNode!.next = list1;
    }
    if (list2 != null) {
      currentNode!.next = list2;
    }
    return head!.next;
  }
}
