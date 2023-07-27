import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { actionsEmitter } from './emitter';
import { GameBoard } from '../../types/main';

const rl = readline.createInterface({ input, output });

export async function startBitsCraft(): Promise<boolean> {
  const answer = await rl.question("Start game (y/n): ");

  try{     
     if(answer.toLowerCase() === "y"){
      return true;
     } else {
      rl.close();
      return false;
     }
  } catch (error) {
    console.log("Failed on game start");
    throw new Error()
  }
}

export async function nextAction(board: GameBoard){
  console.log("B) Build, M) Move, A) Attack, R) Main, Q) Quit")
  const action = (await rl.question("Action: ")).toLowerCase()

  if(actionsEmitter.has(action)){
    const userAction = actionsEmitter.get(action)
    userAction(board, rl);
  }

  return
}
