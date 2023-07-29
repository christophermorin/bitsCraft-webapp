import { UserInterface } from "../../types/main";
import { rl } from "../gameLoop/startPrompt";

export async function selectPoint(): Promise<{y: number, x: number}>{
  const yPos = await rl.question("Y position: ");
  const xPos = await rl.question("X position: ");
  return {y: Number(yPos.trim()), x: Number(xPos.trim())}
}

// export async function selectPoint(message: string): Promise<number> {
  
//   const point: number = await new Promise((resolve) => {
//     process.stdout.write(message);

//     process.stdin.setEncoding('utf-8');

//     let inputBuffer = '';

//     // Create a data event listener to read input
//     const onData = (input: string) => {
//       // Check if the input contains the Enter key (carriage return)
//       if (input.includes('\r') || input.includes('\n')) {
//         // Remove the event listener to prevent further data capture
        
//         // Clean the input from any extra characters (newline, carriage return)
//         const cleanedInput = inputBuffer.trim();
        
//         // Resolve the promise with the user's input
//         resolve(Number(cleanedInput));
//         process.stdin.removeListener('data', onData);
//       } else {
//         // Append the input to the buffer
//         inputBuffer += input;
//       }
//     };

//     process.stdin.on('data', onData);
//   });

//   return point
// }