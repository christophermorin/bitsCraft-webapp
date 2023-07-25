import { InitBoard } from "../../src/classes/InitBoard";

const init = new InitBoard(10,10);
export const helperGameBoard = init.buildBoard();