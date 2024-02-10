/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

function romanToInt(s: string): number {
	const roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
	let result = 0
	for (let i = 0; i < s.length; i++) {
		let next = 0
		if (i + 1 < s.length) {
			next = roman[s[i + 1]]
		}
		if (roman[s[i]] < next) result -= roman[s[i]]
		else result += roman[s[i]]
	}
	return result
}
// @lc code=end
