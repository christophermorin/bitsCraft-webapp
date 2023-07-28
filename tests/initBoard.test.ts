import {expect, jest, test} from '@jest/globals';
import { InitBoard } from "../src/setup/InitBoard";

describe("init new game board", () => {
  test('game board has height and width values', () => {
    const init = new InitBoard(4, 4);
    expect(init.height).toBe(4);
    expect(init.width).toBe(4);
  });
})

describe("board populated correctly", () => {
  const init = new InitBoard(15, 15);
  const defaultBoard = init.buildBoard();

  test("board axis have correct lengths", () => {
    expect(defaultBoard).toHaveLength(15);
    expect(defaultBoard[0]).toHaveLength(15);
  });
  test("X,Y axis have aligned indices lables", () => {
    expect(defaultBoard[3][0].face).toBe("\x1b[35m" + "\x1b[1m" + " 3 " + "\x1b[0m");
    expect(defaultBoard[0][3].face).toBe("\x1b[35m" + "\x1b[1m" + "  3" + "\x1b[0m");

    expect(defaultBoard[14][0].face).toBe("\x1b[35m" + "\x1b[1m" + " 14" + "\x1b[0m");
    expect(defaultBoard[0][14].face).toBe("\x1b[35m" + "\x1b[1m" + " 14" + "\x1b[0m");
  });
  test("indices are marked as border tiles", () => {
    expect(defaultBoard[0][0].isBorder).toBe(true);
    expect(defaultBoard[0][14].isBorder).toBe(true);

  })
  test("board inner tiles are populated with default values", () => {
    expect(defaultBoard[1][1].face).toBe(" . ");
    expect(defaultBoard[1][1].fog).toBe(" ⚫");
    expect(defaultBoard[1][1].impassable).toBe(false);
    expect(defaultBoard[1][1].point).toEqual({y: 1, x: 1});
  });
});

