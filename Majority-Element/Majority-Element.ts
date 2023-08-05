

function majorityElement(nums: number[]): number {
  let dict = {};
  for (let num of nums) {
    dict[num] = (dict[num] || 0) + 1;
  }
  for (let key of Object.keys(dict)) {
    if (dict[key] > nums.length / 2) {
      return Number(key);
    }
  }
  return 0;
}


