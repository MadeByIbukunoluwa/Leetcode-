function twoSum(nums: number[], target: number): number[] {
  const map: Map<number, number> = new Map();
  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i];
    let x = target - curr;
    if (map.has(x)) {
      return [map.get(x), i];
    }
    map.set(nums[i], i);
  }
  return [];
}



function twoSum(nums: number[], target: number): number[] {

let newnums:number[] = [...nums].sort((a,b) => a - b);

let p1 = 0;
let p2 = newnums.length - 1;

let num1 = 0, num2 = 0;


while (p1 < newnums.length && p2 > 0) {

    let sum = newnums[p1] + newnums[p2];

    // if the sum is greater than the target
    if (sum > target ) {
        p2--
    }
    // if the sum is less than the target
    else if (sum < target) {
        p1++
    }
    // if it is neither greater nor less than the target then it is surely equal to the target , 
    else {
        num1 = newnums[p1]
        num2 = newnums[p2]
        break;
    }
}
    
    let idx1 = nums.indexOf(num1)
    let idx2 = nums.lastIndexOf(num2)

    return [idx1,idx2]
};