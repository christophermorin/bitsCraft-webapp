import { expect, jest, test } from "@jest/globals";
import { defaultBoard } from "../helpers/testBoards";
import { printBoard } from "../../src/utils/printBoard";

describe("Prints correct board to console", () => {
  test("Print board of size 20x30", () => {
    const testBoard = defaultBoard();
    let out: string = "";
    for (let i = 0; i < testBoard.length; i++) {
      let row: string[] = [];
      for (let j = 0; j < testBoard[i].length; j++) {
        row.push(`${testBoard[i][j].face}`);
      }
      out += `${row.join("")}\n`;
    }
    expect(printBoard(testBoard)).toEqual(out);
  }),
    test("passing invalid board fails", () => {
      const out = printBoard(null);
      expect(out).toBe("Invalid Board");
    });
});
