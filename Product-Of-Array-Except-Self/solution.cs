// https://stackoverflow.com/questions/1912128/filter-an-array-in-c-sharp
public class Solution
{
    public int[] ProductExceptSelf(int[] nums)
    {
        // here we use the idea of prefix and suffix products
        int[] res = new int[nums.Length];

        int prefix = 1;

        for (int i = 0; i < nums.Length; i++)
        {
            res[i] = prefix;
            prefix *= nums[i];
        }
        // foreach (int el in res) {
        //     Console.WriteLine(el);
        // }
        int postfix = 1;

        for (int j = nums.Length - 1; j >= 0; j--)
        {
            // if we assign it directly we will override what was previously stored
            // there
            res[j] *= postfix;
            postfix *= nums[j];
        }
        return res;
    }
}

// Time Complexity : O(N), As we iterate the Array(nums) twice. Where N = size of the array.

//     Space complexity : O(1), Constant space. Extra space is only allocated for the Array(output), however the
//     output does not count towards the space complexity.
