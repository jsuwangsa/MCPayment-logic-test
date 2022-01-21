// A. Two Sums
// Given an array of integers nums and an integer target, return indices of the two numbers
// such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use
// the same element twice. You can return the answer in any order.
// Example 1:
// Input: nums = [2,7,11,15], target = 13
// Output: [0,2]
// Output: Because nums[0] + nums[2] == 13, we return [0, 2].
// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

const twoSums = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return [i, j];
      }
    }
  }
};

const arr1 = [2, 7, 11, 15],
  target1 = 13;

const arr2 = [3, 2, 4],
  target2 = 6;

const arr3 = [3, 3],
  target3 = 6;

const arr4 = [8, 6, 9, 7, 10, 15, 5, 4, 19],
  target4 = 12;

console.log(twoSums(arr1, target1));
console.log(twoSums(arr2, target2));
console.log(twoSums(arr3, target3));
console.log(twoSums(arr4, target4));
