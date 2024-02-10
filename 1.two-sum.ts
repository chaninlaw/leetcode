/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

function twoSum(nums: number[], target: number): number[] {
	const numIndexMap = new Map()
	for (let i = 0; i < nums.length; i++) {
		const complement = target - nums[i]
		if (numIndexMap.has(complement)) {
			return [numIndexMap.get(complement), i]
		}
		numIndexMap.set(nums[i], i)
	}
	return [-1, -1]
}
// @lc code=end
