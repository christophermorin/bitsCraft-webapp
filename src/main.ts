import { InitBoard } from "./setup/InitBoard";
import { buildImpassableTerrain } from "./setup/buildTerrain";
import { buildPlayers } from "./setup/buildPlayers";
import { buildResourceNodes } from "./setup/buildResources";
import { printBoard } from "./utils/printBoard";
import { GameContext } from "../types/main";

import { startBitsCraft, nextAction } from "./userPrompts/gamePrompts";

async function start(context: GameContext){
  const gameStart = await startBitsCraft();
  if (gameStart){
    console.log(printBoard(context))
    nextAction(context.board);
  } else {
    console.log("\nThanks for playing BitsCraft\n");
  }
}

function initGame(){
  const init = new InitBoard(20, 30);
  const gameboard = init.buildBoard();
  buildImpassableTerrain(gameboard);
  
  const players = buildPlayers(gameboard);
  buildResourceNodes(gameboard);

  const gameContext: GameContext = {
    board: gameboard,
    players: players
  }

  // start game
    // takes in the created gameboard
  start(gameContext)
}


initGame()
