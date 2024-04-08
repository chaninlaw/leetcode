function removeDuplicates(nums: number[]): number {
    const set = new Set() 
    let i = 0
    nums.forEach((num) => {
        if (!set.has(num)) {
          set.add(num)
          nums[i++] = num
        }
    })
  
    return i
};