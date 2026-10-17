import { readFile } from '@shared/file.js'

function solveSecond(): number {
    const directions = readFile("./2015/day3/input.txt")

    type coordinates = {
        x: number,
        y: number
    }
    type entitiesCoords = {
        santaCoordinates: coordinates,
        robotCoordinates: coordinates
    }
    
    let visited: Set<string> = new Set()
    let entities: entitiesCoords = {
        santaCoordinates: {x: 0, y: 0},
        robotCoordinates: {x: 0, y: 0}
    }

    let currentTurn = 0
    visited.add([0, 0].toString())

    for (const direction of directions) {
        let entityCoordinates: coordinates = currentTurn ? entities.robotCoordinates : entities.santaCoordinates
        if (direction === "<") entityCoordinates.x -= 1
        if (direction === "^") entityCoordinates.y += 1
        if (direction === ">") entityCoordinates.x += 1
        if (direction === "v") entityCoordinates.y -= 1
        
        let currentPosition = [entityCoordinates.x, entityCoordinates.y].toString()
        if (~visited.has(currentPosition)) {
            visited.add(currentPosition)
        }
        currentTurn = ~currentTurn
    }
    return visited.size
}

console.log(solveSecond())