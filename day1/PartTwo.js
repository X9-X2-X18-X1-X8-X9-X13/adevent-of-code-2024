import { leftList, rightList } from "./PartOne.js";


let similarityScore = leftList.map(elm => {
    return elm * rightList.filter(cmp => elm === cmp).length
}).reduce((acc, num)  => acc + num, 0)

console.log(similarityScore)