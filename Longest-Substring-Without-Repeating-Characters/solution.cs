public class Solution
{
    public int LengthOfLongestSubstring(string s)
    {
        HashSet<char> set = new HashSet<char>();
        int left = 0;
        int right = 0;
        int maxLength = 0;
        while (right < s.Length)
        {
            if (!set.Contains(s[right]))
            {
                set.Add(s[right]);
                right++;
                maxLength = Math.Max(maxLength, set.Count());
            }
            else
            {
                set.Remove(s[left]);
                left++;
            }
        }
        return maxLength;
    }
}