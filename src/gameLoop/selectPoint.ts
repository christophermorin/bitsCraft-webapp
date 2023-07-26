// import { GameBoard } from "../../types/types";

// import * as readline from 'node:readline/promises';
// import { stdin as input, stdout as output } from 'node:process';

// export async function selectPoint(board: GameBoard): Promise<string> {
//   const rl = readline.createInterface({ input, output });
//   rl.close()
//   try {
//     const answer = await rl.question("Select a tile (e.g., 0,1): ");
//     const [y, x] = answer.split(",");
//     return `You selected ${board[Number(y)][Number(x)].trim()} at, Point: [${y},${x}]`;
//   } finally {
//     rl.close();
//   }
// }