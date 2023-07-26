import {expect, jest, test} from '@jest/globals';
import { defaultBoard } from '../helpers/testBoards';
import { printBoard } from "../../src/utils/printBoard";

describe("Prints correct board to console", () => {
  test("Print board of size 20x30", () => {
    const testBoard = defaultBoard();
    let out: string = ""
    for (let i = 0; i < testBoard.length; i++) {
      out += `${testBoard[i].join("")}\n`
  }
    expect(printBoard(testBoard)).toEqual(out);
  }),
  test("passing invalid board fails", () => {
    const out = printBoard(null);
    expect(out).toBe("Invalid Board");
  })
});
