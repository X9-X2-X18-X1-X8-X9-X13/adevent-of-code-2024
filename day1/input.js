import fs from 'fs';

const input = fs.readFileSync('./input.txt', 'utf8')
    .toString()
    .trim()
    .split('\r\n')

export default input