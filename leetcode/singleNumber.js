/**
 * 
 * Single Number
 * 
 * Given a non-empty array of integers, every element appears twice except for one.
 * Find that single one.
 * 
 * Note: 
 * Your algorithm should have a linear runtime complexity.
 * Could you implement it without using extra memory?
 * 
 * 
 * Example 1:
 * 
 * Input: [2,2,1]
 * Output: 1
 * 
 * Example 2: 
 * 
 * Input: [4,1,2,1,2]
 * Output: 4
 */


/**
 * This solution uses extra memory
 */
// var singleNumber = function (nums) {
//     const seenNumbers = nums.reduce(
//         (hash, v) => {
//             hash[v] = hash[v] ? 2 : 1
//             return hash
//         }, {})
//     return Object.keys(seenNumbers).find(v => seenNumbers[v] === 1)
// };

/**
 * This one liner is the ultimate winner
 */
const singleNumber = (nums) => nums.reduce((a,b) => a ^ b, 0);
