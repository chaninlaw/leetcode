/*
 * @lc app=leetcode id=136 lang=typescript
 *
 * [136] Single Number
 */

// @lc code=start
function singleNumber(nums: number[]): number {
	if (nums.length === 1) return nums[0]
	return nums.reduce((prev, curr) => prev ^ curr, 0)
}
// @lc code=end
