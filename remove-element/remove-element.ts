function removeElement(nums: number[], val: number): number {
    let i: number = 0
    nums.forEach((num) => {
        if (num !== val) {
            nums[i++] = num
        }
    })

    return i
};