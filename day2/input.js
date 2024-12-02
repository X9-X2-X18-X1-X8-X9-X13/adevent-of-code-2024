import fs from 'fs'
export const input = fs.readFileSync('./input.txt')
        .toString()
        .trim()
        .split('\r\n')