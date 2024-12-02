import {input} from './input.js'

let safeRecords = 0

input.map(record => {
    if(isSafe(record)) 
        safeRecords++
})
console.log(safeRecords)

function isSafe(sublist) {
    let record = sublist.split(' ').map(Number)
    let firstCondition = isSorted(record)
    let secondCondition = hasValidDifference(record)
    return firstCondition && secondCondition    
}

function isSorted(arr) {
    const isAscending = arr.every((val, i, array) => i === 0 || val >= array[i - 1]);
    const isDescending = arr.every((val, i, array) => i === 0 || val <= array[i - 1]);
    return isAscending || isDescending;
  };

  function hasValidDifference(arr){
    return arr.every((val, i, array) => {
      if (i === 0) return true; 
      const diff = Math.abs(val - array[i - 1]);
      return diff >= 1 && diff <= 3;
    });
  };

  export {isSafe, isSorted, hasValidDifference}