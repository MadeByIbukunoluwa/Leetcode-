class Solution {
  bool isAnagram(String s, String t) {
      if (s.length != t.length) return false;
     Map<String,int> dict1 = new Map<String,int>();
     Map<String,int> dict2 = new Map<String,int>();

     for (var i = 0; i < s.length; i++) {
        //  if (dict1.containsKey(s[i])) {
        //      dict1[s[i]] = dict1[s[i]] + 1 ;
        //  }
        //   dict1[s] = 1 ;
           dict1[s[i]] = (dict1[s[i]] ??= 0) + 1;
        // RangeError (index): Invalid value: Only valid value is 0: 1
     }
     for (var i = 0; i < t.length; i++) {
        //   if (dict1.containsKey(t[i])) {
        //      dict2[t[i]] = dict2[t[i]] + 1 ;
        //   }
        //  dict1[t] = 1 ;
          dict2[t[i]] = (dict2[t[i]] ??= 0) + 1;
     }

     for (var i = 0; i < s.length; i++) {
         if (!dict2.containsKey(s[i])) {
             return false;
         }
        if (dict1[s[i]] != dict2[s[i]]) {
            return false;
        }
     }
     return true;
  }
}