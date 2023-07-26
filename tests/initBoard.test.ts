import {expect, jest, test} from '@jest/globals';
import { InitBoard } from "../src/setup/InitBoard";

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
    // All indices are bolded and magenta color
    expect(defaultBoard[3][0]).toBe("\x1b[35m" + "\x1b[1m" + " 3 " + "\x1b[0m");
    expect(defaultBoard[0][3]).toBe("\x1b[35m" + "\x1b[1m" + "  3" + "\x1b[0m");

    expect(defaultBoard[14][0]).toBe("\x1b[35m" + "\x1b[1m" + " 14" + "\x1b[0m");
    expect(defaultBoard[0][14]).toBe("\x1b[35m" + "\x1b[1m" + " 14" + "\x1b[0m");
  });
  test("board is populated with default tiles", () => {
    expect(defaultBoard[1][1]).toBe(" . ");
  });
});

