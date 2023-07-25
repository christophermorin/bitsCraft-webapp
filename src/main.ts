import { InitBoard } from "./classes/InitBoard";
import { TerrainBuilder } from "./classes/terrain/TerrainBuilder";
import { printBoard } from "./classes/utils/printBoard";

// initialize an empty board of specified size
const init = new InitBoard(20, 40);
// populate board with axis labels, and defaul terrain
const defaultBoard = init.buildBoard();

function buildImpassableTerrain (){
  const builder = new TerrainBuilder(defaultBoard);
    for (let i = 0; i < 3; i++){
      builder.buildTerrain(" 🗻", 0.03);
      builder.buildTerrain(" 🌲", 0.02);
    }
    for (let i = 0; i < 3; i++){
    }
    
}

buildImpassableTerrain()
console.log(printBoard(defaultBoard))

