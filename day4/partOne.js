import {input} from './input.js'

let columns = Array.from({ length: input[0].length }, (_, colIndex) =>
    input.map(row => row[colIndex])
    );
    columns = columns.map(elm => elm.join(''))

let output = 0
input.map((elm, idx) => {
    let temp = elm.matchAll(/X/g)
    let indices = [...temp].map(match => match['index'])
        let tt = checkforXMAS(idx, indices)
     output += tt
     console.log(tt)
       
})

function checkforXMAS(x, y) {
    let matches = 0;
  
    for (let i = 0; i < y.length; i++) {
      // Calculate all possible strings in 8 directions
      const leftString = y[i] < 3 ? '' : input[x].substring(y[i] - 3, y[i] + 1).split('').reverse().join('');
      const rightString = y[i] > input[x].length - 4 ? '' : input[x].substring(y[i], y[i] + 4);
      const upwardString = x < 3 ? '' : columns[y[i]].substring(x - 3, x + 1).split('').reverse().join('');
      const downwardString = x > input.length - 4 ? '' : columns[y[i]].substring(x, x + 4);
      const diagonalNE = (x < 3 || y[i] > input[x].length - 4) ? '' : getDiagonal(x, y[i], 4, 'NE').join('');
      const diagonalNW = (x < 3 || y[i] < 3) ? '' : getDiagonal(x, y[i], 4, 'NW').join('');
      const diagonalSE = (x > input.length - 4 || y[i] > input[x].length - 4) ? '' : getDiagonal(x, y[i], 4, 'SE').join('');
      const diagonalSW = (x > input.length - 4 || y[i] < 3) ? '' : getDiagonal(x, y[i], 4, 'SW').join('');
  
      // Check for matches in each direction
      if (leftString === 'XMAS') matches++;
      if (rightString === 'XMAS') matches++;
      if (upwardString === 'XMAS') matches++;
      if (downwardString === 'XMAS') matches++;
      if (diagonalNE === 'XMAS') matches++;
      if (diagonalNW === 'XMAS') matches++;
      if (diagonalSE === 'XMAS') matches++;
      if (diagonalSW === 'XMAS') matches++;
    }
  
    return matches;
  }
  

console.log('output: ', output)

function getDiagonal(row, col, length = 4, direction) {
    let grid = input
    const diagonal = [];
    // Define direction adjustments for NE, NW, SE, SW
    const directions = {
      NE: [-1, 1], // Move up (-1) and right (+1)
      NW: [-1, -1], // Move up (-1) and left (-1)
      SE: [1, 1], // Move down (+1) and right (+1)
      SW: [1, -1], // Move down (+1) and left (-1)
    };
  
    // Get the row and column deltas for the chosen direction
    const [deltaRow, deltaCol] = directions[direction];
  
    for (let i = 0; i < length; i++) {
      const newRow = row + i * deltaRow;
      const newCol = col + i * deltaCol;
  
      // Ensure we're within bounds
      if (newRow >= 0 && newRow < grid.length && newCol >= 0 && newCol < grid[newRow].length) {
        diagonal.push(grid[newRow][newCol]); // Access the character at the new position
      } else {
        break; // Stop if out of bounds
      }
    }
  
    return diagonal;
  }
  
  