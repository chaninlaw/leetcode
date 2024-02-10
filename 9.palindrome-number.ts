/*
 * @lc app=leetcode id=9 lang=typescript
 *
 * [9] Palindrome Number
 */

// @lc code=start
function isPalindrome(x: number): boolean {
	if (x < 0) return false
	if (x < 10) return true
	if (x % 10 === 0) return false
	else return x.toString() === x.toString().split('').reverse().join('')
}
// @lc code=end
