import {expect, jest, test} from '@jest/globals';
import { PlayerPositions } from '../src/setup/buildPlayers/PlayersPositions';

import { boardWithTerrain } from './helpers/testBoards';

describe("PlayerPositions class init", () => {
  test("Instance of PlayerPositions created", () => {
    const instance = new PlayerPositions(boardWithTerrain());
    expect(instance).toBeDefined();
    expect(instance).toHaveProperty("buildPlayerPositions");
    expect(typeof instance.buildPlayerPositions).toBe("function");
  })
})

describe("Resources and HQs placed for both players", () => {
    const testBoard = boardWithTerrain()
  beforeEach(() => {
    const instance = new PlayerPositions(testBoard);
    instance.buildPlayerPositions();
  });
  test("Top resource nodes exist", () => {
    const topNode = testBoard[1].find(tile => tile.face === ' 💎');
    expect(topNode?.face).toBe(' 💎')
    expect(topNode?.value).toBe(500)
  }),
  test("Player 1 HQ exist", () => {
    // hqText string sets player 1 HQ text to bold and blue.
    const hqText = "\x1b[34m" + "\x1b[1m" +  " HQ" + "\x1b[0m"
    const topHq = testBoard[2].find(tile => tile.face === hqText);
    expect(topHq?.face).toBe(hqText);
    expect(topHq?.owner).toBe("Player One");
    expect(topHq?.point).toBeDefined();
  }),
  test("Bottom resource nodes exist", () => {
    const bottomNode = testBoard[testBoard.length - 1].find(tile => tile.face === ' 💎');
    expect(bottomNode?.face).toBe(' 💎')
    expect(bottomNode?.value).toBe(500)

  }),
  test("Player 2 HQ exist", () => {
    // hqText string sets player 2 HQ text to bold and red.
    const hqText = "\x1b[31m" + "\x1b[1m" +  " HQ" + "\x1b[0m"
    const bottomHq = testBoard[testBoard.length - 2].find(tile => tile.face === hqText);
    expect(bottomHq?.face).toBe(hqText);
    expect(bottomHq?.owner).toBe("Player Two");
    expect(bottomHq?.point).toBeDefined;
  })
});

