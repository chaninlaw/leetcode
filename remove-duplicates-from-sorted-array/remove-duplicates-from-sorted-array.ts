function removeDuplicates(nums: number[]): number {
    const set = new Set() 
    let i: number = 0
    nums.forEach((num) => {
        if (!set.has(num)) {
            set.add(num)
            nums[i++] = num
        }
    })
    console.log(nums)
    return i
};