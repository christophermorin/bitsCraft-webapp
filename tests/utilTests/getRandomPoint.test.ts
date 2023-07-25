import { expect, jest, test } from '@jest/globals';
import { getRandomPoint } from '../../src/classes/utils/getRandomPoint'

describe("Random point selection", () => {
  test("Returns random number within set constraints", () => {
    const pointA = getRandomPoint(10, 10);
    expect(pointA.y).toBe(5);

    const pointB = getRandomPoint(20, 20);
    expect(pointB.y).toBeGreaterThanOrEqual(5);
    expect(pointB.y).toBeLessThanOrEqual(15);

    // const pointC = getRandomPoint(4,10);
    // expect(pointC.y).toBeUndefined()
  })
})