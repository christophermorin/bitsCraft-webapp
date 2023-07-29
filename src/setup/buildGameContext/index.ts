import { InitBoard } from "../InitBoard";
import { buildImpassableTerrain } from "../buildTerrain";
import { buildPlayers } from "../buildPlayers";
import { buildResourceNodes } from "../buildResources";
import { GameContext } from "../../../types/main";

export function buildGameContext(): GameContext{
  const init = new InitBoard(20, 30);
  const gameboard = init.buildBoard();
  buildImpassableTerrain(gameboard);

  const players = buildPlayers(gameboard);
  buildResourceNodes(gameboard);

  const gameContext: GameContext = {
    board: gameboard,
    players: players
  }

  return gameContext
}

export const gameContext = buildGameContext()