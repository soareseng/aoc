import { readFile } from '@shared/file.js'

function solveFirst(): number {
    const input = readFile("./2015/day2/input.txt")
    const dimensions = input.split("\n")
    let wrappingPaper = 0
    for (const dimension of dimensions) {
        const [l, w, h] = dimension.split("x").map(Number) as [number, number, number]
        wrappingPaper += (2*l*w) + (2*w*h) + (2*h*l)
        const smallestSide = [l, w, h].sort((a, b) => a - b) as [number, number, number]
        wrappingPaper += smallestSide[0] * smallestSide[1]
    }
    return wrappingPaper
}

console.log(solveFirst())