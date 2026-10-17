import { readFile } from '@shared/file.js'

function isVowel(char: string): boolean {
    return ["a", "e", "i", "o", "u"].some((val) => char === val)
}

function isEqual<T>(a: T, b: T): boolean {
    return a === b
}

function isInvalidString(a: string, b: string): boolean {
    return ["ab", "cd", "pq", "xy"].some((val) => a + b === val)
}

function isNiceString(text: string): boolean {
    let first: number = 0
    let second: number = 1
    let vowels = isVowel(text.charAt(first)) ? 1 : 0
    let twice = 0

    while (second < text.length) {
        const firstChar = text.charAt(first)
        const secondChar = text.charAt(second)
        if (isInvalidString(firstChar, secondChar)) return false
        if (isVowel(secondChar)) vowels++
        if (isEqual(firstChar, secondChar)) twice++
        first++
        second++
    }
    if(vowels >= 3 && twice) return true
    return false
}

function solveFirst(): number {
    const input = readFile("./2015/day5/input.txt")
    const strings = input.split("\n")
    let count = 0
    for (const str of strings) {
        if(isNiceString(str)) count++
    }
    return count
}

console.log(solveFirst())