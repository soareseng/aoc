import { readFile } from '@shared/file.js'


function isEqual<T>(a: T, b: T): boolean {
    return a === b
}

function isNiceString(text: string): boolean {
    let first: number = 0
    let second: number = 1
    let seenTwice = false
    let letterBetween = false
    let seen: Record<string, number> = {}

    while (second < text.length) {
        const firstChar = text.charAt(first)
        const secondChar = text.charAt(second)
        let charHash = firstChar + secondChar

        if (seen[charHash] !== undefined && first - seen[charHash] >= 2) seenTwice = true
        if (second < text.length - 1 && isEqual(firstChar, text[second+1])) letterBetween = true
        
        if (seen[charHash] === undefined) {
            seen[charHash] = first
        }
        first++
        second++
    }
    return seenTwice && letterBetween
}

function solveSecond(): number {
    const input = readFile("./2015/day5/input.txt")
    const strings = input.split("\n")
    let count = 0
    for (const str of strings) {
        if(isNiceString(str)) count++
    }
    return count
}

console.log(solveSecond())