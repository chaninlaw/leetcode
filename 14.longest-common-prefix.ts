/*
 * @lc app=leetcode id=14 lang=typescript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
	let prefix = ''
	for (let i = 0; i < strs[0].length; i++) {
		for (let j = 1; j < strs.length; j++) {
			if (strs[0][i] !== strs[j][i]) {
				return prefix
			}
		}
		prefix += strs[0][i]
	}
	return prefix
}
// @lc code=end
