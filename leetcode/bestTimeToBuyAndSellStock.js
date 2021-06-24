/**
 * 
 * BEST TIME TO BUY AND SELL STOCK
 * 
 * Say you have an array for which the [i]th element is the price of a stock on a day i.
 * 
 * Design an algorithm to find the maximum profit.You may complete as many transactions as 
 * you like (i.e., buy one and sell one share of the stock multiple times).
 * 
 * Note : You may not engage in multiple transactions at the same time(i.e., you must sell the 
 *  stock before you buy again)
 * 
 * Example 1:
 * 
 * Input : [7, 1,5,3,6]
 * Output: 7
 * Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
 *              Then you buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6 - 3 = 3
 * 
 * Example 2:
 * 
 * Input : [1, 2,3,4,5]
 * Output: 4
 * Explanation: Buy on day 1 (price = 1) and sell on day 5(price = 5), profit = 5-1 = 4.
 *              Note that you cannot buy on day 1, buy on day 2 and sell them later, as you
 *              are engaging multiple transactions at the same time. You must sell before 
 *              buying again.
 * 
 * 
 */


/**
 * Solution
 * 
 *Using reduce

 Basically takes the positive price difference between all the trading days and 
 adds them up.
 */

const x = [7, 1,5,3,6];
const y = [1, 2,3,4,5];
const z = [2,4,1];

const maxProfit = (prices) => prices.reduce((pr,p,i, ar) => 
                            (p - ar[i - 1]) > 0 
                            ? (p - ar[i-1] + pr) 
                            : pr ,0);

console.log(maxProfit(x));
console.log(maxProfit(y));
console.log(maxProfit(z));