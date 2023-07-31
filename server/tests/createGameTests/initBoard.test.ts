import {expect, jest, test, describe} from '@jest/globals';
import { InitBoard } from "../../src/createGame/InitBoard";

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
  test("board inner tiles are populated with default values", () => {
    expect(defaultBoard[1][1].terrain).toBe("open");
    expect(defaultBoard[1][1].owner).toBe(null);
    expect(defaultBoard[1][1].point).toEqual({y: 1, x: 1});
  });
});

