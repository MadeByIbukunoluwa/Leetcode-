function containsDuplicate(nums: number[]): boolean {
  if (nums.length > new Set(nums).size) {
    return true;
  }
  return false;
}




function containsDuplicate(nums: number[]): boolean {
    let set = new Set<number>()
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) return true;
        else {
            set.add(nums[i])
        }
    }
    return false
};
