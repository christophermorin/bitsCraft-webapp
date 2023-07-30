import {expect, jest, test, describe} from '@jest/globals';
import { buildGameContext } from '../src/createGame/buildGameContext'

describe("Returns game context with board and players", () => {
  test("Returns game context", () => {
    const context = buildGameContext();
    
    expect(context.board).toBeDefined();
    expect(context.players).toBeDefined();
  }),
  test("Board and players have defined properties", () => {
    const context = buildGameContext();

    expect(context.board).toHaveLength(20);
    expect(context.players.playerOne.name).toBe("Player One");
    expect(context.players.playerTwo.name).toBe("Player Two");

  })
})

