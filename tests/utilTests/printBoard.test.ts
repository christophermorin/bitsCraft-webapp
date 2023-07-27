import { expect, jest, test } from "@jest/globals";
import { defaultBoard } from "../helpers/testBoards";
import { testContext } from "../helpers/testContext";
import { printBoard } from "../../src/utils/printBoard";

describe("Prints correct board to console", () => {
  test("Print board of size 20x30", () => {
    const context = testContext()
    const board = printBoard(context)
    
    // Not the best tests. Testing each char of board for values. Worst case I scan the whole board while not finding player two.
    const playerOneVisible = board.includes("\x1b[34m" + "\x1b[1m" +  " HQ" + "\x1b[0m");
    expect(playerOneVisible).toBe(true);

    const playerTwoVisible = board.includes("\x1b[31m" + "\x1b[1m" +  " HQ" + "\x1b[0m");
    expect(playerTwoVisible).toBe(false);
  }),
    test("passing invalid board fails", () => {
      const out = printBoard(null);
      expect(out).toBe("Invalid Board");
    });
});
