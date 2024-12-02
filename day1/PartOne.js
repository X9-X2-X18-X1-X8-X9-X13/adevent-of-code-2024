import input from './input.js'

let rightList = []
let leftList = []
input.map((elm) => {
    const [left, right] = elm.split(/\s+/)
    leftList.push(left)
    rightList.push(right)
})
leftList.sort((a, b) => a - b)
rightList.sort((a, b) => a - b)

let output = 0
leftList.map((elm, idx) => output+=Math.abs(elm-rightList[idx]))
console.log(output)

export {leftList, rightList}