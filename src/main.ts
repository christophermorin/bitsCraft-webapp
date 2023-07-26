import { InitBoard } from "./setup/InitBoard";
import { buildImpassableTerrain } from "./setup/buildTerrain";
import { buildPlayerPositions } from "./setup/buildPlayers";
import { buildResourceNodes } from "./setup/buildResources";

import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';


import { printBoard } from "./utils/printBoard";

function initGame(){
  const init = new InitBoard(20, 30);
  const gameboard = init.buildBoard();
  buildImpassableTerrain(gameboard);
  buildPlayerPositions(gameboard);
  buildResourceNodes(gameboard);



  console.log(printBoard(gameboard))
}

async function main(){
  const rl = readline.createInterface({ input, output });
  const answer = await rl.question("Start game (y/n): ");
  if (answer.toLowerCase() === 'y'){
    initGame();
  }
  else{
    console.log("\nOk, bye\n")
    rl.close();
  }
  return
}


main()








