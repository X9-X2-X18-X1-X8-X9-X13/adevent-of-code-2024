import input from './input.js'

const regex = /mul\(\d{1,3},\d{1,3}\)/g
let test = input.matchAll(regex)   //.matchAll returns an 'iterator'

let mulls = [...test].map(match => match[0])  // The multiplication patterns that are not 'corrupted'
const mulNumbers = /mul\((\d{1,3}),(\d{1,3})\)/  //'()' parentheses are capturing group that saves the matched part for later

let output = 0
mulls.map(mul => {
    let [, numberOne, numberTwo] = mul.match(mulNumbers)
    output += numberOne * numberTwo
})

console.log(output)