import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

export const rl = readline.createInterface({ input, output });

// The conditionals of this question can be placed inside of the question call as a call back func
export async function startBitsCraft(): Promise<boolean> {
  const answer = await rl.question("Start game (y/n): ");
  try{     
     if(answer.toLowerCase() === "y"){
      return true;
     } else {
      return false;
     }
  } catch (error) {
    console.log("Failed on game start");
    throw new Error()
  }
}
