function heightChecker(heights: number[]): number {
    const expected = [...heights].sort((a, b) => a - b)
    let doesntMatchIndices = 0
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== expected[i]) {
            doesntMatchIndices++
        }
    }
    return doesntMatchIndices
};