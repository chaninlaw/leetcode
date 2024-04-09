function validMountainArray(arr: number[]): boolean {
  if (arr.length < 3) return false
  
  let prev = arr[0]
  let isUp: boolean | undefined
  let isDown: boolean | undefined
  for (let i = 1; i < arr.length; i++) {
    if (prev === arr[i]) return false
    
    const increasing = prev - arr[i] < 0

    // first increasing
    if (increasing && isUp === undefined) {
      isUp = true
    }
    
    // first decreasing
    if (!increasing && isUp && isDown === undefined) {
      isUp = false
      isDown = true
    }
    
    if (!increasing && !isDown) return false
    if (increasing && !isUp) return false
    
    prev = arr[i]
  }
  return !isUp && isDown
};
