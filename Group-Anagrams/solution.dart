// in dart arrays are list literals don't be confused

class Solution {
  List<List<String>> groupAnagrams(List<String> strs) {
    var map = new Map<String, List<String>>();
    for (var str in strs) {
      List<int> hasharr = new List.filled(26, 0, growable: false);
      for (int i = 0; i < str.length; i++) {
        hasharr[str[i].codeUnitAt(0) - 'a'.codeUnitAt(0)]++;
      }
      String hash = hasharr.join("#");
      if (!map.containsKey(hash)) {
        map[hash] = [str];
      } else {
        map[hash]!.add(str);
      }
    }
    return map.values.toList();
  }
}
