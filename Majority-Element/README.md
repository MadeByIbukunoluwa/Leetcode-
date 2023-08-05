# Majority Element 

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109

## Approach 1

Create a frequency counter by creating a hastable or map of all the numbers where each number is a key 
and the count (frequency) is the corressponding value

iterate through the keys and return the one whose frequency value is greater than half the length of the array

## Time Complexity 

O(n) - building the frequency table or counter

O(n) - getting all the keys from the map

O(n) iterating through the keys

O(n)


## Approach 2

- sort the array

