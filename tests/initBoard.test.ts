import {expect, jest, test} from '@jest/globals';
import { initBoard } from "../src/classes/initBoard";

describe("init new game board", () => {
  test('game board has height and width values', () => {
    const init = new initBoard(4, 4);
  
    expect(init.height).toBe(4);
    expect(init.width).toBe(4);
  });
})

const init = new initBoard(4, 4);
const defaultBoard = init.buildBoard();

describe("default board populated correctly", () => {
  test("default board axis have correct lengths", () => {
    expect(defaultBoard).toHaveLength(4);
    expect(defaultBoard[0]).toHaveLength(4);
  });
  test("X,Y axis have indices lables", () => {
    expect(defaultBoard[3][0]).toBe(" 3 ");
    expect(defaultBoard[0][3]).toBe(" 3 ");
  })
  test("default board is populated with default tiles", () => {
    expect(defaultBoard[1][1]).toBe(" . ");
  })
});

