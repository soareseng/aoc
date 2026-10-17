import { readFile } from '@shared/file.js'

function solveFirst(): number {
    const directions = readFile("./2015/day3/input.txt")
    let visited: Set<string> = new Set()
    let currentX = 0
    let currentY = 0
    visited.add([currentX, currentY].toString())
    for (const direction of directions) {
        if (direction === "<") currentX -= 1
        if (direction === "^") currentY += 1
        if (direction === ">") currentX += 1
        if (direction === "v") currentY -= 1
        
        let currentPosition = [currentX, currentY].toString()
        if (~visited.has(currentPosition)) {
            visited.add(currentPosition)
        }
    }
    return visited.size
}

console.log(solveFirst())