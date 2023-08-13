public class Solution
{
    public bool IsValid(string s)
    {
        if (s[0] == '}' || s[0] == ')' || s[0] == ']') return false;

        Dictionary<char, char> dict = new Dictionary<char, char>
        {
            {'}' , '{'},
            {']' , '['},
            {')' ,  '('}
        };
        //instead of a Dictionarry Literal, we can use the Add method
        // dict.Add('}' , '{')
        // dict.Add(']' , '[')
        // dict.Add(')' ,  '(')
        //https://www.guru99.com/c-sharp-stack.html

        Stack<char> stack = new Stack<char>();

        foreach (char c in s)
        {
            if (!dict.ContainsKey(c))
            {
                stack.Push(c);
            }
            else if (stack.Count == 0 || stack.Pop() != dict[c])
            {
                return false;
            }
        }

        return stack.Count == 0;
    }
}