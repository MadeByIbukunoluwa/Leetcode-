// We will use the LINQ extension method Distinct() to get the distinct items from the array then compare the number of disticnt items with the length of the original array 
public class Solution
{
    public bool ContainsDuplicate(int[] nums)
    {
        return nums.Distinct().Count() != nums.Count();
    }
}


// initialize a new Hashset
// iterate thorugh the nums array 
// if the element we come across while iterating throught the array is already in the set return true - there is a duplicate element
// else we add it to the set and continue iteration
// if not we return false 

public class Solution
{
    public bool ContainsDuplicate(int[] nums)
    {
        HashSet<int> set = new HashSet<int>(nums);
        if (nums.Length > set.Count)
        {
            return true;
        }
        return false;
    }
}


public class Solution
{
    public bool ContainsDuplicate(int[] nums)
    {
        HashSet<int> set = new HashSet<int>();
        foreach (int element in nums)
        {
            if (set.Contains(element)) return true;
            else
            {
                set.Add(element);
            }
        }
        return false;
    }
}
