/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let dict = {};
  for (let num of nums) {
    dict[num] = (dict[num] || 0) + 1;
  }
  for (key of Object.keys(dict)) {
    if (dict[key] > nums.length / 2) {
      return key;
    }
  }
  return 0;
};
