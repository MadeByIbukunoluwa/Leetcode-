// Build up a dictionary of key value pairs where the keys are the cahracters of the string and the values are the number of occurrences of the characters 
// Iterate through all the keys in the first dictionary and in each iteration if the second dictionary does not contain a key - (second stirng does not have a letter) return false , because 
public class Solution
{
    public bool IsAnagram(string s, string t)
    {

        Dictionary<char, int> dict1 = new Dictionary<char, int>();
        Dictionary<char, int> dict2 = new Dictionary<char, int>();

        foreach (char letter in s)
        {
            if (dict1.ContainsKey(letter))
            {
                dict1[letter] = dict1[letter] + 1;
            }
            else
            {
                dict1.Add(letter, 1);
            }
        }
        foreach (char letter in t)
        {
            if (dict2.ContainsKey(letter))
            {
                dict2[letter] = dict2[letter] + 1;
            }
            else
            {
                dict2.Add(letter, 1);
            }
        }

        foreach (var key in dict1.Keys)
        {
            if (!dict2.ContainsKey(key)) return false;
            if (dict1[key] != dict2[key]) return false;
        }
        if (dict1.Keys.Count != dict2.Keys.Count)
        {
            return false;
        }
        return true;
    }
}



// we can get the position by subtracting the letter from 'a'

// char arithmetic is explained in detial in the notes below

// then we will compare arr1 and arr2 for every count of the char occurences, if one is not the same, return false

// Things to note - 
// A char is an integral type. It is NOT a character, it is a number!
// 'a' is just shorthand for a number - which is its ascii value.

// So adding or subtracting two character results in a number.

// according to https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/char

//The char type supports comparison, equality, increment, and decrement operators. Moreover, for char operands, arithmetic and bitwise logical operators perform an operation on the corresponding character codes and produce the result of the int type.

// The difference between their ascii values will give you their position in the alphabet + 1 

// Adding a plus sign in front of them will display them not as characters but as their ASCII values

// Console.WriteLine(+'n'); -> 110 

// Console.WriteLine(+'a'); -> 97

// 110 - 97 = 13 , 13 + 1 = 14 

// but since array indexing starts from zero, we do not need to add a one 

public class Solution
{
    public bool IsAnagram(string s, string t)
    {
        if (s.Length != t.Length) return false;
        int[] arr1 = new int[26];
        int[] arr2 = new int[26];

        for (int i = 0; i < s.Length; i++)
        {
            arr1[s[i] - 'a']++;
            arr2[t[i] - 'a']++;
        }

        for (int i = 0; i < 26; i++)
        {
            if (arr1[i] != arr2[i]) return false;
        }
        return true;
    }
}



public class Solution
{
    public bool IsAnagram(string s, string t)
    {
        if (s.Length != t.Length) return false;
        int[] arr = new int[26];

        foreach (char sChar in s)
        {
            arr[sChar - 'a']++;
        }
        foreach (char tChar in t)
        {
            if (arr[tChar - 'a'] <= 0) return false;
            else
                arr[tChar - 'a']--;
        }
        return true;
    }
}


