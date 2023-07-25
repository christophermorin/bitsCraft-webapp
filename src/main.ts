import { initBoard } from "./classes/initBoard";
import { printBoard } from "./classes/utils/printBoard";
import { buildCliffs } from "./classes/terrain/buildCliffs";

// initialize an empty board of specified size
const init = new initBoard(100, 60);
// populate board with axis labels, and defaul terrain
const defaultBoard = init.buildBoard();


// Adds cliffs to the baord
const cliffs1 = buildCliffs(defaultBoard);
const cliffs2 = buildCliffs(cliffs1);
const cliffs3 = buildCliffs(cliffs2);
// build terrain
  // pass gameboard to terrain class
  // 


// print the gameBoard
console.log(printBoard(cliffs3))

