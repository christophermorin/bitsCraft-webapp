import {expect, jest, test} from '@jest/globals';
import {PlacePlayers} from '../src/classes/playerPlacement/PlacePlayers';
import { helperGameBoard } from './helpers/helpers';

describe("PlacePlayers class init", () => {
  test("Instance of PlacePlayers created", () => {
    const instance = new PlacePlayers(helperGameBoard);
    expect(instance).toBeDefined();
    expect(instance).toHaveProperty("buildPlayerPositions");
    expect(typeof instance.buildPlayerPositions).toBe("function");
  })
})

describe("Resources and HQs placed for both players", () => {
  beforeEach(() => {
    const instance = new PlacePlayers(helperGameBoard);
    instance.buildPlayerPositions();
  });
  test("Top resource nodes exist", () => {
    const topNodes = helperGameBoard[1].find(tile => tile === ' 💎');
    expect(topNodes).toBe(' 💎')
  }),
  test("Player 1 HQ exist", () => {
    // hqText string sets player 1 HQ text to bold and blue.
    const hqText = "\x1b[34m" + "\x1b[1m" +  " HQ" + "\x1b[0m"
    const topHq = helperGameBoard[2].find(tile => tile === hqText);
    expect(topHq).toBe(hqText);
  }),
  test("Bottom resource nodes exist", () => {
    const bottomNodes = helperGameBoard[helperGameBoard.length - 1].find(tile => tile === ' 💎');
    expect(bottomNodes).toBe(' 💎')
  }),
  test("Player 2 HQ exist", () => {
    // hqText string sets player 2 HQ text to bold and red.
    const hqText = "\x1b[31m" + "\x1b[1m" +  " HQ" + "\x1b[0m"
    const bottomHq = helperGameBoard[helperGameBoard.length - 2].find(tile => tile === hqText);
    expect(bottomHq).toBe(hqText);
  })
});

