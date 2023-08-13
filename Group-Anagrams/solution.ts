function groupAnagrams(strs: string[]): string[][] {
  let map = {};
  for (let i = 0; i < strs.length; i++) {
    let arr = Array(26).fill(0);
    let current = strs[i];
    for (const str of current) {
      arr[str.charCodeAt(0) - "a".charCodeAt(0)]++;
    }
    let key = arr.join();
    if (map.hasOwnProperty(key)) {
      map[key].push(current);
    } else {
      map[key] = [current];
    }
  }
  return Object.values(map);
}

// O(m * n);
