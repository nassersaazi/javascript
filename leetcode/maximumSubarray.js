/**
 * 
 * Maximum Subarray
 * 
 * Given an integer array nums, find the contiguous subarray(containing at least one number) which has the largest
 * sum and return its sum.
 * 
 * Example
 * 
 * Input: [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6
 * 
 * Follow up:
 * 
 * If you have figured out the O(n) solution, try coding another solution 
 * using the divide and conquer approach,which is more subtle(O(n)logn)
 */

 const solution = (nums) => {

    // using Kadane's algorithm... O(n)
    /**
     * Kadane's algorithm(modified slightly to accomodate -ve values)
     * 
     * Given two variables, max_local and max_global and an array nums,
     * 
     * initialise max_local to 0
     * initialise max_global to -ve infinity(to cater for -ve values)
     * 
     * for each element ,i in a
     *      max_local = max_local + a[i]
     *      if max_local < a[i]
     *          max_local = a[i]
     *      if max_global < max_local
     *          max_global = max_local
     * 
     * return max_global 
     */

    let max_local = nums[0];
    let max_global = -Infinity;

    nums.forEach((e,i) => {
        max_local = Math.max(nums[i],max_local+ nums[i]);
        max_global = Math.max(max_global,max_local);
    });
    
    return max_global;
}
