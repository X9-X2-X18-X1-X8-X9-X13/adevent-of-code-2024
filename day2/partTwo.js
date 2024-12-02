import { isSorted, hasValidDifference} from './partOne.js'

import {input} from './input.js'
let safeRecords = 0

input.map(record => {
    if(isSafe(record)) 
        safeRecords++
})
console.log('part two', safeRecords)

function isSafe(sublist) {
    let record;
    if(typeof sublist == 'string'){
         record = sublist.split(' ').map(Number)
    }else  record = sublist
    let firstCondition = isSorted(record)
    let secondCondition = hasValidDifference(record)
    if(firstCondition && secondCondition )
        return true 
    else return isSalvagable(record)
}

function isSalvagable(arr){
    for(let i = 0 ; i < arr.length ; i++){
        let firstCondition = isSorted(arr.toSpliced(i, 1))
        let secondCondition = hasValidDifference(arr.toSpliced(i, 1))
        if(firstCondition && secondCondition ){
            return true
        }

    }
    return false
}
