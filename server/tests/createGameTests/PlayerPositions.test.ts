import {expect, jest, test, beforeEach, describe} from '@jest/globals';
import { PlayerPositions } from '../../src/createGame/buildPlayers/PlayersPositions';

import { boardWithTerrain } from '.././helpers/testBoards';

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
    const topNode = testBoard[0].find(tile => tile.terrain === "resource");
    expect(topNode?.owner).toBe(null)
    expect(topNode?.value).toBe(500)
  }),
  test("Player 1 HQ exist", () => {
    // hqText string sets player 1 HQ text to bold and blue.
    const topHq = testBoard[1].find(tile => tile.terrain === "HQ");
    expect(topHq?.owner).toBe("Player One");
    expect(topHq?.health).toBe(100)
  }),
  test("Bottom resource nodes exist", () => {
    const bottomNode = testBoard[testBoard.length - 1].find(tile => tile.terrain === "resource");
    expect(bottomNode?.owner).toBe(null)
    expect(bottomNode?.value).toBe(500)

  }),
  test("Player 2 HQ exist", () => {
    // hqText string sets player 2 HQ text to bold and red.
    const hqText = "\x1b[31m" + "\x1b[1m" +  " HQ" + "\x1b[0m"
    const bottomHq = testBoard[testBoard.length - 2].find(tile => tile.terrain === "HQ");
    expect(bottomHq?.owner).toBe("Player Two");
    expect(bottomHq?.health).toBe(100);
  })
});

