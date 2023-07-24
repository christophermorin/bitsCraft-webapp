
import {expect, jest, test} from '@jest/globals';
import { gameBoard } from "./helpers/helpers";
import { printBoard } from "../src/classes/utils/printBoard";

describe("Prints correct board to console", () => {
  test("Print board of size 4x4", () => {
    let out: string = ""
    for (let i = 0; i < gameBoard.length; i++) {
    out += `${gameBoard[i].join("")}\n`
  }
  
    expect(printBoard(gameBoard)).toEqual(out);
  })
});
