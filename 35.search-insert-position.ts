/*
 * @lc app=leetcode id=35 lang=typescript
 *
 * [35] Search Insert Position
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
	const numsSet = new Set(nums)
	if (numsSet.has(target)) return nums.indexOf(target)

	numsSet.forEach((num, idx) => {
		if (num > target) return idx
	})

	return nums.length
}
// @lc code=end
