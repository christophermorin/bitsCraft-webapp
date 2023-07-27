import { InitBoard } from "../../src/setup/InitBoard";
import { PlayerPositions } from "../../src/setup/buildPlayers/PlayersPositions";
import { TerrainBuilder} from "../../src/setup/buildTerrain/TerrainBuilder";
import { GameBoard } from "../../types/main";

const init = new InitBoard(20,30);
export const helperGameBoard = init.buildBoard();

export function defaultBoard(): GameBoard{
  const init = new InitBoard(20,30);
  const testBoard = init.buildBoard();

  return testBoard
}

export function boardWithTerrain(): GameBoard{
  const testBoard = defaultBoard()
  const builder = new TerrainBuilder(testBoard);
   for (let i = 0; i < testBoard.length / 2; i++){
    builder.buildTerrain(" 🗻");
    builder.buildTerrain(" 🌲");
  }

  return testBoard;
}

export function boardWithTerrainPlayers(): GameBoard {
  const testBoard = boardWithTerrain();
  const builder = new PlayerPositions(testBoard);

  builder.buildPlayerPositions();

  return testBoard;
}
