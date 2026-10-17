import { readFile } from '@shared/file.js'

function solveSecond(): number {
    const input = readFile("./2015/day1/input.txt")
    let currentFloor = 0
    for (let i=0; i < input.length; i++) {
        if (input[i] === "(") {
            currentFloor += 1
        } else {
            currentFloor -= 1
        }
        if (currentFloor === -1) {
            return i+1
        }
    }
    return -1
}

console.log(solveSecond())