public class Solution
{
    //https://stackoverflow.com/questions/13012260/cant-add-keyvaluepair-directly-to-dictionary
    //https://canro91.github.io/2020/08/01/AnotherTwoCSharpIdiomsPart3/
    public int[] TwoSum(int[] nums, int target)
    {
        IDictionary<int, int> dict = new Dictionary<int, int>();

        for (int i = 0; i < nums.Length; i++)
        {
            int current = nums[i];
            int difference = target - current;

            if (dict.ContainsKey(difference))
            {
                return new int[] { dict[difference], i };
            }
            dict.TryAdd(nums[i], i);
        }
        //same thing 
        // return new int[] {};
        //C sharp produces a default value for a type
        return default;
    }
}