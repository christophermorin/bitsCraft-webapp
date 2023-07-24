import { initBoard } from "../../src/classes/initBoard";

const init = new initBoard(4,4);
export const gameBoard = init.buildBoard();