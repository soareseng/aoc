import { readFile } from '@shared/file.js'

function solveSecond(): number {
    const input = readFile("./2015/day2/input.txt")
    const dimensions = input.split("\n")
    let ribbon = 0
    for (const dimension of dimensions) {
        const [a, b, c] = dimension.split("x").map(Number).sort((a, b) => a-b) as [number, number, number]
        ribbon += (a * b * c) + (2 * a + 2 * b)
    }
    return ribbon
}

console.log(solveSecond())