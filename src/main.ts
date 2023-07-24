import { initBoard } from "./classes/initBoard";
import { printBoard } from "./classes/utils/printBoard";

// initialize an empty board of specified size
const init = new initBoard(4, 4);
// populate board with axis labels, and defaul terrain
const defaultBoard = init.buildBoard();

// build terrain
  // pass gameboard to terrain class
  // 


// print the gameBoard
const printed = printBoard(defaultBoard);
console.log(printBoard(defaultBoard))

