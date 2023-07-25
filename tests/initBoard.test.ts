import {expect, jest, test} from '@jest/globals';
import { InitBoard } from "../src/classes/InitBoard";

describe("init new game board", () => {
  test('game board has height and width values', () => {
    const init = new InitBoard(4, 4);
  
    expect(init.height).toBe(4);
    expect(init.width).toBe(4);
  });
})

const init = new InitBoard(15, 15);
const defaultBoard = init.buildBoard();

describe("board populated correctly", () => {
  test("board axis have correct lengths", () => {
    expect(defaultBoard).toHaveLength(15);
    expect(defaultBoard[0]).toHaveLength(15);
  });
  test("X,Y axis have aligned indices lables", () => {
    expect(defaultBoard[3][0]).toBe(" 3 ");
    expect(defaultBoard[0][3]).toBe("  3");

    expect(defaultBoard[14][0]).toBe(" 14");
    expect(defaultBoard[0][14]).toBe(" 14");
  })
  test("board is populated with default tiles", () => {
    expect(defaultBoard[1][1]).toBe(" ⬛");
  })
});

