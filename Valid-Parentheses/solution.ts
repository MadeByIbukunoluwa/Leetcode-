function isValid(s: string): boolean {
  //check if the current element matches what is at the top of your stack
  if (s[0] == ")" || s[0] == "}" || s[0] == "]") return false;
  let stack = [];
  let map = {
    "}": "{",
    ")": "(",
    "]": "[",
  };
  for (let i = 0; i < s.length; i++) {
    if (stack.length && stack[stack.length - 1] == map[s[i]]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length == 0;
}
