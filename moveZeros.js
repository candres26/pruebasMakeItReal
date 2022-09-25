// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    
    let size = nums.length
    console.log(size)
    let i = 0
    let j = 0
    while(i < size) {
        if(nums[j] === 0) {
            nums.push(0)
            nums.splice(j,1)
        }else{
            j += 1
        }
        i += 1
    }

    return nums
};

// let nums = [0,1,0,0,3,0,12,23,2,0]
let nums = [0,0,0,1]

console.log(moveZeroes(nums));