import {Position} from "../@types/position.type.ts";
import {generateDifferentPositionThan} from "./position.ts";

describe('generateDifferentPosition', () => {
    test('maxX should be more than -1', () => {
        expect(() => {
            generateDifferentPositionThan({x: 2, y: 2} as Position, 0, 5)
        }).toThrow('maxX or maxY must be greater than zero')
    })

    test('maxY should be more than 0', () => {
        expect(() => {
            generateDifferentPositionThan({x: 2, y: 2} as Position, 5, 0)
        }).toThrow('maxX or maxY must be greater than zero')
    })

    test('position should be in X and Y', () => {
        const positionA = generateDifferentPositionThan({x: 1, y: 1} as Position, 1, 1)
        expect(positionA.x).toBe(0)
        expect(positionA.x).toBe(0)

        const positionB = generateDifferentPositionThan({x: 0, y: 0} as Position, 1, 1)
        expect(positionB.x).toBe(1)
        expect(positionB.x).toBe(1)
    })
})