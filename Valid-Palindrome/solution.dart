class Solution {
  bool isPalindrome(String s) {
    int left = 0;
    int right = s.length - 1;
    bool isAlphaNum(dynamic s) {
      return ("a".codeUnitAt(0) <= s.codeUnitAt(0) &&
              s.codeUnitAt(0) <= "z".codeUnitAt(0)) ||
          ("A".codeUnitAt(0) <= s.codeUnitAt(0) &&
              s.codeUnitAt(0) <= "Z".codeUnitAt(0)) ||
          ("0".codeUnitAt(0) <= s.codeUnitAt(0) &&
              s.codeUnitAt(0) <= "9".codeUnitAt(0));
    }

    while (left < right) {
      while (!isAlphaNum(s[left]) && left < right) left++;
      while (!isAlphaNum(s[right]) && left < right) right--;
      if (s[left].toLowerCase() != s[right].toLowerCase()) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }
}
