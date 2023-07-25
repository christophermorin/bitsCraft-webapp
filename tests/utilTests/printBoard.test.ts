import {expect, jest, test} from '@jest/globals';
import { helperGameBoard } from "../helpers/helpers";
import { printBoard } from "../../src/classes/utils/printBoard";

describe("Prints correct board to console", () => {
  test("Print board of size 4x4", () => {
    let out: string = ""
    for (let i = 0; i < helperGameBoard.length; i++) {
    out += `${helperGameBoard[i].join("")}\n`
  }
  
    expect(printBoard(helperGameBoard)).toEqual(out);
  }),
  test("passing invalid board fails", () => {
    const out = printBoard(null);
    expect(out).toBe("Invalid Board");
  })
});
