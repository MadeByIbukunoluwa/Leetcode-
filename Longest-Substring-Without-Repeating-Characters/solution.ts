function lengthOfLongestSubstring(s: string): number {
  if (s.length == 1) return 1;
  let p1 = 0;
  let p2 = 0;
  let set = new Set();
  let max = 0;
  while (p1 < s.length && p2 < s.length) {
    if (!set.has(s[p2])) {
      set.add(s[p2]);
      max = Math.max(set.size, max);
      p2++;
    } else {
      set.delete(s[p1]);
      p1++;
    }
  }
  return max;
}
