import { InitBoard } from "./classes/InitBoard";
import { TerrainBuilder } from "./classes/buildTerrain/TerrainBuilder";
import { PlacePlayers } from "./classes/playerPlacement/PlacePlayers";

import { printBoard } from "./classes/utils/printBoard";

// initialize an empty board of specified size
const init = new InitBoard(40, 50);
// populate board with axis labels, and defaul terrain
const defaultBoard = init.buildBoard();

function buildImpassableTerrain (){
  const builder = new TerrainBuilder(defaultBoard);
  for (let i = 0; i < defaultBoard.length / 2; i++){
    builder.buildTerrain(" 🗻");
    builder.buildTerrain(" 🌲");
  }
}
buildImpassableTerrain()

const players = new PlacePlayers(defaultBoard);
players.buildPlayerPositions()
console.log(printBoard(defaultBoard))

