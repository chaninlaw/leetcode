/*
 * @lc app=leetcode id=58 lang=typescript
 *
 * [58] Length of Last Word
 */

// @lc code=start
function lengthOfLastWord(s: string): number {
	const str = s.trim()
	let count = 0
	for (let i = str.length - 1; i >= 0; i--) {
		if (str[i] === ' ') return count
		count++
	}
	return count
}
// @lc code=end
