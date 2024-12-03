import input from './input.js'

const regex = /mul\(\d{1,3},\d{1,3}\)/g;

// Match all mul(...) patterns
const allMatches = [...input.matchAll(regex)];

// Filter out matches that are preceded by "don't()" without "do()"
const validMatches = allMatches.filter((match, index) => {
  const prevPart = input.slice(0, match.index);  // Slice the string before the match
  const lastDont = prevPart.lastIndexOf("don't()"); // Find last "don't()"
  const lastDo = prevPart.lastIndexOf("do()");  // Find last "do()"

  // Exclude match if "don't()" precedes it without "do()" between them
  return !(lastDont > lastDo && lastDont < match.index);
});

const result = validMatches.map(match => match[0]);
const mulNumbers = /mul\((\d{1,3}),(\d{1,3})\)/ 

let output = 0
result.map(mul => {
    let [, numberOne, numberTwo] = mul.match(mulNumbers)
    output += numberOne * numberTwo
})

console.log(output);
