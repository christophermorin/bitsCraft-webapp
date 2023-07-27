import { boardWithTerrainPlayers } from "./testBoards";
import { PlayerBuilder } from "../../src/setup/buildPlayers/PlayerBuilder";
import { GameContext } from "../../types/main";

export function testContext(): GameContext {
  const gameboard = boardWithTerrainPlayers();
  const players = new PlayerBuilder(gameboard);

  const playerOne = players.create(1);
  const playerTwo = players.create(2);

  return {
    board: gameboard,
    players: {playerOne, playerTwo}
  };
}
