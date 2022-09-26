// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numsValid = []
    console.log(nums.length)
    let i = 0
    while(i < nums.length){
        for(let j = i + 1;j < nums.length;j++){
            if((nums[i] + nums[j]) === target){
                numsValid.push(i, j)
            }
        }
        i++
    }
    return numsValid
};

// console.log(twoSum([3,2,4], 6))
// console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3,3], 6))