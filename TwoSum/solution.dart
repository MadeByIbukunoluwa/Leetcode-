class Solution {
  List<int> twoSum(List<int> nums, int target) {
     final Map<int,int> map = new Map();
      for (int i= 0; i < nums.length; i++) {
        int current = nums[i];
        int difference = target - current;
        if (map.containsKey(difference)) {
            return [map[difference]!,i];
        }
        map[nums[i]] = i;
      }
      return [];
  }
}