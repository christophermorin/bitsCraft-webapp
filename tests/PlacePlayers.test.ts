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
    const topNode = testBoard[1].find(tile => tile.face === ' 💎');
    expect(topNode?.face).toBe(' 💎')
  }),
  test("Player 1 HQ exist", () => {
    // hqText string sets player 1 HQ text to bold and blue.
    const hqText = "\x1b[34m" + "\x1b[1m" +  " HQ" + "\x1b[0m"
    const topHq = testBoard[2].find(tile => tile.face === hqText);
    expect(topHq?.face).toBe(hqText);
  }),
  test("Bottom resource nodes exist", () => {
    const bottomNode = testBoard[testBoard.length - 1].find(tile => tile.face === ' 💎');
    expect(bottomNode?.face).toBe(' 💎')
  }),
  test("Player 2 HQ exist", () => {
    // hqText string sets player 2 HQ text to bold and red.
    const hqText = "\x1b[31m" + "\x1b[1m" +  " HQ" + "\x1b[0m"
    const bottomHq = testBoard[testBoard.length - 2].find(tile => tile.face === hqText);
    expect(bottomHq?.face).toBe(hqText);
  })
});

