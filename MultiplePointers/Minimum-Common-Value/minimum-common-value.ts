














// Attempt 1 - passed normal testcases but time limit exceeded 37 / 40 testcases passed
function getCommon(nums1: number[], nums2: number[]): number {
        let p1 = 0
        let p2 = 0 
        
        let nums1length = nums1.length
        let nums2length = nums2.length

        let len = nums1length > nums2length ? nums1length : nums2length
        console.log('len',len)
        while (p1 < len) {
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
    return nums1[p1] || -1
};