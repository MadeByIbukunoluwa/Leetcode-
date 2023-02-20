// 2562. Find the Array Concatenation Value
// Easy
// 150
// 5
// Companies
// You are given a 0-indexed integer array nums.

// The concatenation of two numbers is the number formed by concatenating their numerals.

// For example, the concatenation of 15, 49 is 1549.
// The concatenation value of nums is initially equal to 0. Perform this operation until nums becomes empty:

// If there exists more than one number in nums, pick the first element and last element in nums respectively and add the value of their concatenation to the concatenation value of nums, then delete the first and last element from nums.
// If one element exists, add its value to the concatenation value of nums, then delete it.
// Return the concatenation value of the nums.

 

// Example 1:

// Input: nums = [7,52,2,4]
// Output: 596
// Explanation: Before performing any operation, nums is [7,52,2,4] and concatenation value is 0.
//  - In the first operation:
// We pick the first element, 7, and the last element, 4.
// Their concatenation is 74, and we add it to the concatenation value, so it becomes equal to 74.
// Then we delete them from nums, so nums becomes equal to [52,2].
//  - In the second operation:
// We pick the first element, 52, and the last element, 2.
// Their concatenation is 522, and we add it to the concatenation value, so it becomes equal to 596.
// Then we delete them from the nums, so nums becomes empty.
// Since the concatenation value is 596 so the answer is 596.
// Example 2:

// Input: nums = [5,14,13,8,12]
// Output: 673
// Explanation: Before performing any operation, nums is [5,14,13,8,12] and concatenation value is 0.
//  - In the first operation:
// We pick the first element, 5, and the last element, 12.
// Their concatenation is 512, and we add it to the concatenation value, so it becomes equal to 512.
// Then we delete them from the nums, so nums becomes equal to [14,13,8].
//  - In the second operation:
// We pick the first element, 14, and the last element, 8.
// Their concatenation is 148, and we add it to the concatenation value, so it becomes equal to 660.
// Then we delete them from the nums, so nums becomes equal to [13].
//  - In the third operation:
// nums has only one element, so we pick 13 and add it to the concatenation value, so it becomes equal to 673.
// Then we delete it from nums, so nums become empty.
// Since the concatenation value is 673 so the answer is 673.
 

// Constraints:

// 1 <= nums.length <= 1000
// 1 <= nums[i] <= 104
 

// v1 
// function findTheArrayConcVal(nums: number[]): number {
//   let concatVal = 0;
//   let p1 = 0;
//   let p2 = nums.length - 1;
//   // This was a multiple pointer question, so thats the pattern i used , the next thing i realized was that i had an error , the pointers didnt stop when they were adjacent to each other, meaning they went until the pointer at the start reached the end , and the pointer at the end reached the start, making the concatenation value wrong
//   if (nums.length === 1) return (concatVal += nums[0]);

//   while (p1 < nums.length) {
//     if (p1 === p2) {
//       return (concatVal += nums[p1]);
//     }
//     concatVal += Number(nums[p1].toString() + nums[p2].toString());
//     p1++;
//     p2--;
//   }
//   return concatVal;
// }

// Fixed the problem stated above 
function findTheArrayConcVal(nums: number[]): number {
    let concatVal = 0
    let p1 = 0
    let p2 = nums.length - 1  
// This was a multiple pointer question, so thats the pattern i used , the next thing i realized was that i had an error , the pointers didn't stop when they were adjacent to each other, meaning they went until the pointer at the start reached the end , and the pointer at the end reached the start, making the concatenation value wrong , so i had to implement a simple check in the while loop , 
    if (nums.length === 1 ) return concatVal += nums[0]

    while (p1 < nums.length) {
        console.log(p1,p2)
         if (p1 === p2) {
             return concatVal += nums[p1]
         }
        concatVal += Number(nums[p1].toString() +  nums[p2].toString())
         if (p1 + 1 === p2 || p2 - 1 === p1) {
             return concatVal
         }
        p1++
        p2--
    }
    return concatVal 
};