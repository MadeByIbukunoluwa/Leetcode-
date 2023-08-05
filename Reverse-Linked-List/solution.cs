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
#nullable enable

public class Solution
{
    public ListNode ReverseList(ListNode? head)
    {
        return reverseListInt(head, null);
    }
    private ListNode reverseListInt(ListNode? head, ListNode? prev)
    {
        ListNode? next;
        if (head == null) return prev;
        next = head.next;
        head.next = prev;
        return reverseListInt(next, head);
    }
}