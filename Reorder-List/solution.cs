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
    public void ReorderList(ListNode head)
    {
        ListNode slow = head;
        ListNode fast = head.next;
        while (fast != null && fast.next != null)
        {
            slow = slow.next;
            fast = fast.next.next;
        }
        ListNode secondHalf = slow.next;
        slow.next = null;

        ListNode firstHalf = head;
        ListNode secondHalf1 = RevList.ReverseList(secondHalf);

        while (secondHalf1 != null)
        {
            ListNode next1 = firstHalf.next;
            ListNode next2 = secondHalf1.next;
            firstHalf.next = secondHalf1;
            secondHalf1.next = next1;
            firstHalf = next1;
            secondHalf1 = next2;
        }
    }
}
public class RevList
{
    public static ListNode ReverseList(ListNode head)
    {
        ListNode currNode = head;
        ListNode prevNode = null;
        ListNode next;
        while (currNode != null)
        {
            next = currNode.next;
            currNode.next = prevNode;
            prevNode = currNode;
            currNode = next;
        }
        return prevNode;
    }
}