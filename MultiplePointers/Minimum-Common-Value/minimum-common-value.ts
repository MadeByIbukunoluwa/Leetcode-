// Given two integer arrays nums1 and nums2, sorted in non-decreasing order, return the minimum integer common to both arrays. If there is no common integer amongst nums1 and nums2, return -1.

// Note that an integer is said to be common to nums1 and nums2 if both arrays have at least one occurrence of that integer.

 

// Example 1:

// Input: nums1 = [1,2,3], nums2 = [2,4]
// Output: 2
// Explanation: The smallest element common to both arrays is 2, so we return 2.
// Example 2:

// Input: nums1 = [1,2,3,6], nums2 = [2,3,4,5]
// Output: 2
// Explanation: There are two common elements in the array 2 and 3 out of which 2 is the smallest, so 2 is returned.
 

// Constraints:

// 1 <= nums1.length, nums2.length <= 105
// 1 <= nums1[i], nums2[j] <= 109
// Both nums1 and nums2 are sorted in non-decreasing order.














// Attempt 1 - passed normal testcases but time limit exceeded, 37 / 40 testcases passed
function getCommon(nums1: number[], nums2: number[]): number {
        let p1 = 0
        let p2 = 0 
        
        // let nums1length = nums1.length
        // let nums2length = nums2.length

        // let len = nums1length > nums2length ? nums1length : nums2length
        // console.log('len',len)
        while (p1 < nums1.length && p2 < nums2.length) {
            if (nums1[p1] === nums2[p2]) {
                return nums1[p1]
            }
            else if(nums1[p1] !== nums2[p2] && nums2[p2] > nums1[p1]) {
                p1++
            }
            else p2++ 
            // console.log(p1,p2)
        }
        // console.log(p1,p2)
        console.log(nums1,p1)
    return -1
};

// And then i figured out for a case like this [3,5],[2] , the two arrays will not fulfill the first 2 conditions , making p2 , the second pointer increment to infinity

// I also figured out that i didn't need to get the length of the longer array (len) so i removed it 
// i also modifed the return statemnet to only return -1, without the || operator 
// I just have to make sure that the pointers for each array should not exceed the array length 

// outcome - the runtime was poor, and it used a lot of memory 

// Runtime
// 435 ms
// Beats
// 10.67%
// Memory
// 60 MB
// Beats
// 21.33%