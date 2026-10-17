import { readFile } from '@shared/file.js'

function solveFirst(): number {
    const input = readFile("./2015/day1/input.txt")
    let currentFloor = 0
    for (const char of input) {
        if (char === "(") {
            currentFloor += 1
        } else {
            currentFloor -= 1
        }
    }
    return currentFloor
}

console.log(solveFirst())