import {expect, jest, test} from '@jest/globals';
import { scanPoint } from '../../src/actions/scanPoint';
import { boardWithTerrainPlayers } from '../helpers/testBoards';

describe("Scan point", () => {
  test("Returns true on valid point", () => {
    const testBoard = boardWithTerrainPlayers();
    const result = scanPoint(testBoard, {y: 5, x: 5});

    expect(result).toBe(true);
  })
  test("Returns false on invalid point", () => {
    const testBoard = boardWithTerrainPlayers();
    const result = scanPoint(testBoard, {y: 50, x: 50});

    expect(result).toBe(false);
  })
})