import { createHash } from 'crypto';

function getMd5(text: string): string {
  return createHash('md5').update(text, 'utf8').digest('hex');
}

function countZeroes(text: string): number {
    let zeroes = 0
    for (const char of text) {
        if (char !== "0") break
        zeroes += 1
    }
    return zeroes
}

function solveFirst(): number {
    let cur = -1
    let zeroes = 0
    while (zeroes !== 5) {
        cur += 1
        let md5 = getMd5("bgvyzdsv" + cur.toString())
        zeroes = countZeroes(md5)
    }
    return cur
   
}

function solveSecond(): number {
    let cur = -1
    let zeroes = 0
    while (zeroes !== 6) {
        cur += 1
        let md5 = getMd5("bgvyzdsv" + cur.toString())
        zeroes = countZeroes(md5)
    }
    return cur
   
}

console.log(solveFirst())
console.log(solveSecond())