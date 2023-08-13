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
    public ListNode MergeKLists(ListNode[] lists)
    {
        if (lists.Length == 0) return null;

        while (lists.Length > 1)
        {

            var mergedLists = new ListNode[(lists.Length + 1) / 2];

            for (int i = 0; i < lists.Length; i += 2)
            {
                ListNode l1 = lists[i];
                ListNode l2 = i + 1 < lists.Length ? lists[i + 1] : null;
                mergedLists[i / 2] = (MergeLists(l1, l2));
            }

            lists = mergedLists;
        }
        return lists[0];
    }

    public ListNode MergeLists(ListNode l1, ListNode l2)
    {
        ListNode dummyNode = new ListNode();
        ListNode tail = dummyNode;
        while (l1 != null && l2 != null)
        {
            if (l2.val >= l1.val)
            {
                tail.next = l1;
                l1 = l1.next;
            }
            else
            {
                tail.next = l2;
                l2 = l2.next;
            }
            tail = tail.next;
        }
        if (l1 != null)
        {
            tail.next = l1;
        }
        if (l2 != null)
        {
            tail.next = l2;
        }
        return dummyNode.next;
    }
}