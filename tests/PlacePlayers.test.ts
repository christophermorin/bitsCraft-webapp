import {expect, jest, test} from '@jest/globals';
import { PlayerBuilder } from '../src/setup/buildPlayers/PlayersBuilder';
import { boardWithTerrain } from './helpers/testBoards';

describe("PlayerBuilder class init", () => {
  test("Instance of PlayerBuilder created", () => {
    const instance = new PlayerBuilder(boardWithTerrain());
    expect(instance).toBeDefined();
    expect(instance).toHaveProperty("buildPlayerPositions");
    expect(typeof instance.buildPlayerPositions).toBe("function");
  })
})

describe("Resources and HQs placed for both players", () => {
    const testBoard = boardWithTerrain()
  beforeEach(() => {
    const instance = new PlayerBuilder(testBoard);
    instance.buildPlayerPositions();
  });
  test("Top resource nodes exist", () => {
    const topNodes = testBoard[1].find(tile => tile === ' 💎');
    expect(topNodes).toBe(' 💎')
  }),
  test("Player 1 HQ exist", () => {
    // hqText string sets player 1 HQ text to bold and blue.
    const hqText = "\x1b[34m" + "\x1b[1m" +  " HQ" + "\x1b[0m"
    const topHq = testBoard[2].find(tile => tile === hqText);
    expect(topHq).toBe(hqText);
  }),
  test("Bottom resource nodes exist", () => {
    const bottomNodes = testBoard[testBoard.length - 1].find(tile => tile === ' 💎');
    expect(bottomNodes).toBe(' 💎')
  }),
  test("Player 2 HQ exist", () => {
    // hqText string sets player 2 HQ text to bold and red.
    const hqText = "\x1b[31m" + "\x1b[1m" +  " HQ" + "\x1b[0m"
    const bottomHq = testBoard[testBoard.length - 2].find(tile => tile === hqText);
    expect(bottomHq).toBe(hqText);
  })
});

