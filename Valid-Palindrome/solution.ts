function isPalindrome(s: string): boolean {
  if (s.trim().length == 0) return true;
  let newstr = s.toLowerCase().match(/[a-z0-9]/g) || [""];
  let reversedStr = newstr.reverse();

  let p1 = 0;
  let p2 = newstr.length - 1;

  while (p1 < newstr.length && p2 > 0) {
    if (newstr[p1] == reversedStr[p2]) {
      p1++;
      p2--;
    } else {
      return false;
    }
  }
  return true;
}
