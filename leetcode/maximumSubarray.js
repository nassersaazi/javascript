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





// A Divide and Conquer based program for maximum subarray
// sum problem

// A utility funtion to find maximum of two integers
function max(a,b) { return (a > b) ? a : b; }

// A utility funtion to find maximum of three integers
function max(a,b,c) { return Math.max(Math.max(a, b), c); }

// Find the maximum possible sum in arr[] auch that arr[m]
// is part of it
function maxCrossingSum(arr, l, m,h)
{
    // Include elements on left of mid.
    let sum = 0;
    let left_sum = Number.MIN_VALUE;
    for (let i = m; i >= l; i--) {
        sum = sum + arr[i];
        if (sum > left_sum)
            left_sum = sum;
    }

    // Include elements on right of mid
    sum = 0;
    let right_sum = Number.MIN_VALUE;
    for (let i = m + 1; i <= h; i++) {
        sum = sum + arr[i];
        if (sum > right_sum)
            right_sum = sum;
    }

    // Return sum of elements on left and right of mid
    // returning only left_sum + right_sum will fail for
    // [-2, 1]
    return max(left_sum + right_sum, left_sum, right_sum);
}

// Returns sum of maxium sum subarray in aa[l..h]
function maxSubArraySum(arr, l,h)
{
    // Base Case: Only one element
    if (l == h)
        return arr[l];

    // Find middle point
    let m = parseInt((l + h) / 2, 10);

    /* Return maximum of following three possible cases
            a) Maximum subarray sum in left half
            b) Maximum subarray sum in right half
            c) Maximum subarray sum such that the subarray
    crosses the midpoint */
    return max(maxSubArraySum(arr, l, m),
            maxSubArraySum(arr, m + 1, h),
            maxCrossingSum(arr, l, m, h));
}


let arr = [ 2, 3, 4, 5, 7 ];
let n = arr.length;
let max_sum = maxSubArraySum(arr, 0, n - 1);





