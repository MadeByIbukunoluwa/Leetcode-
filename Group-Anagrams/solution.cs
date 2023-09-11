public class Solution
{
    public IList<IList<string>> GroupAnagrams(string[] strs)
    {
        Dictionary<string, IList<string>> dict = new Dictionary<string, IList<string>>();
        for (int i = 0; i < strs.Length; i++)
        {
            string current = strs[i];
            char[] arr = new char[26];
            Console.WriteLine(current);
            foreach (char ch in current)
            {
                arr[ch - 'a']++;
            }
            string key = string.Join(string.Empty, arr);
            
            Console.WriteLine(key);
            if (!dict.ContainsKey(key))
            {
                dict[key] = new List<string> { current };
            }
            else
            {
                dict[key].Add(current);
            }
        }
        return dict.Values.ToList();
    }
}
//CHATGPT answer 
// The reason why using char type instead of int type for the arr array in your code allows all test cases to pass is due to the difference in behavior between the two types.

// In your original code, you initialized the arr array as an int array with a length of 26. When you attempted to increment arr[ch - 'a']++ for each character ch in the current string, it incremented the corresponding element in the array by 1.

// However, when using the int type, the array elements are initially set to 0. Incrementing an element that is 0 by 1 doesn't give you the correct count of characters. Instead, you should initialize the arr array as an array of 26 zeros, like int[] arr = new int[26];, so that you can increment the elements correctly.

// On the other hand, when you changed the arr array to a char array,

//On the other hand, when you changed the arr array to a char array, you essentially changed it to an array that stores characters rather than integers. In this case, the elements of the arr array are initially set to the null character '\0', which represents an empty character. When you increment arr[ch - 'a']++, you are essentially incrementing the ASCII value of the character by 1, which is the desired behavior in this case. This allows you to correctly count the occurrences of each character in the current string.

// Therefore, using char type for the arr array ensures that the array starts with the correct initial values and allows you to correctly count the occurrences of each character, resulting in the correct grouping of anagrams.




