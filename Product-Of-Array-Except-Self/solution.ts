function productExceptSelf(nums: number[]): number[] {
  let res = new Array(nums.length);

  let prefix = 1;

  for (let i = 0; i < nums.length; i++) {
    res[i] = prefix;
    prefix *= nums[i];
  }

  let postfix = 1;

  for (let j = nums.length - 1; j >= 0; j--) {
    res[j] *= postfix;
    postfix *= nums[j];
  }
  return res;
}
