class Solution {
  bool isValid(String s) {
    if (s[0] == '}' || s[0] == ')' || s[0] == ']') return false;
    var map = {']': '[', '}': '{', ')': '('};
    List<String> stack = [];
    for (var c in s.split('')) {
      if (!map.containsKey(c)) {
        stack.add(c);
      } else if (stack.length == 0 || stack.removeLast() != map[c]) {
        return false;
      }
    }
    return stack.isEmpty;
  }
}
