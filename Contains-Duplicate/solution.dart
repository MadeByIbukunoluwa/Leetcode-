class Solution {
  bool containsDuplicate(List<int> nums) {
    Set<int> set = nums.toSet();
    return set.length != nums.length;
  }
}


class Solution {
  bool containsDuplicate(List<int> nums) {
    Set<int> set = nums.toSet();
    if (nums.length > set.length) {
      return true;
    }
    return false;
  }
}


class Solution {
  bool containsDuplicate(List<int> nums) {
    Set<int> set = new Set<int>();
    for (int i = 0; i < nums.length; i++) {
      if (set.contains(nums[i]))
        return true;
      else {
        set.add(nums[i]);
      }
    }
    return false;
  }
}
