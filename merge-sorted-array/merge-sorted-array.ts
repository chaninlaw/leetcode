/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    if (m !== 0) {
        if (m !== nums1.length) {
            nums1.splice(m, nums1.length - 1)
        }
    } else {
        if (nums1.length !== m) {
            const count = nums1.length
            for (let i = 0; i < count; i++) {
                nums1.pop()
            }
        }
    }
    
    if (n !== 0) {
        if (n !+= nums2.length) {
            nums2.splice(n, nums2.length - 1)
        }
    } else {
        if (nums2.length !== n) {
            const count = nums2.length
            for (let i = 0; i < count; i++) {
                nums2.pop()
            }
        }
    }
    
    for (let i = 0; i < nums2.length; i++) {
        nums1.push(nums2[i])
    }

    nums1.sort((a,b) => a-b)
};