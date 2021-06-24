/**
 * 
 * GROUP ANAGRAMS
 * 
 * Given an array of strings, group anagrams together.
 * 
 * Example: 
 * 
 * Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
 * Output: 
 * [
 * ["ate","eat","tea"],
 * ["nat", "tan"],
 * ["bat"]
 * ]
 * 
 * Note:
 * 
 * -All inputs will be in lowercase
 * -The order of your output does not matter
 * 
 * 
 */

const groupAnagrams = (strs) => {
    return Object.values(strs.reduce(
        (hash, w) => {
            const key = w.split('').sort();
            if (hash[key]) {
                hash[key].push(w);
            }
            else {
                hash[key] = [w];
            }
            return hash;
        },
        {}
        
    ));
}

const input = ["eat", "tea", "tan", "ate", "nat", "bat"];

console.log(groupAnagrams(input));