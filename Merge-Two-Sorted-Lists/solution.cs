/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
public class Solution
{
    public ListNode MergeTwoLists(ListNode list1, ListNode list2)
    {
        // head - as in head of dummyList , you get ?
        ListNode head = new ListNode(0);
        ListNode currentNode = head;

        while (list1 != null && list2 != null)
        {
            if (list1.val > list2.val)
            {
                currentNode.next = list2;
                list2 = list2.next;
            }
            else
            {
                currentNode.next = list1;
                list1 = list1.next;
            }
            currentNode = currentNode.next;
        }
        if (list1 != null)
        {
            currentNode.next = list1;
        }
        if (list2 != null)
        {
            currentNode.next = list2;
        }
        return head.next;
    }
}