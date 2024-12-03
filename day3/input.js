import fs from 'fs'
export default fs.readFileSync('./input.txt', 'utf8')
        .toString().trim()