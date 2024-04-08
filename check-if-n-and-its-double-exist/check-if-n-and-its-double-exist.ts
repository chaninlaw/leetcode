function checkIfExist(arr: number[]): boolean {
  const map: Record<string, boolean> = {}
  
  for (let i = 0; i < arr.length; i++) {
     if (map[2 * arr[i]]) {
       return true
     } else if (map[arr[i] / 2]) {
       return arr[i] % 2 === 0
     } else {
       map[arr[i]] = true
     }
  }
  
  return false
};