import { startBitsCraft} from "./gameLoop/startPrompt";
import { emitter } from "./setup/buildMenuEmitter/MenuEmitter";

async function start(): Promise<void>{
  const gameStart = await startBitsCraft();
  if (gameStart){
    // A check here if called by console or server?
    emitter.emit("main menu")
  } else {
    console.log("\nThanks for playing BitsCraft\n");
  }
  return;
}



// To port to webapp. On "New Game", server calls init game. 
// Some kind of "game loop" func would have to return the map to the client each time.

// Server calls main to run initGame.

start()
