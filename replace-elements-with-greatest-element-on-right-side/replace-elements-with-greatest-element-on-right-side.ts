function replaceElements(arr: number[]): number[] {
    let max = arr[arr.length - 1]
    
    arr[arr.length - 1] = -1
  
    for (let i = arr.length - 1; i >= 0; i--) {
      
      if (max < arr[i]) {
        max = arr[i]
      } else {
        const temp = arr[i - 1]
        
        arr[i - 1] = max
        
        if (temp > max) {
          max = temp
        }
      }
    }
  
  return arr
};