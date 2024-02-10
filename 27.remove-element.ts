/*
 * @lc app=leetcode id=27 lang=typescript
 *
 * [27] Remove Element
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
	let count = 0
	nums.forEach((num) => {
		if (num !== val) {
			nums[count++] = num
		}
	})

	return count
}
// @lc code=end
