import { GameBoard } from "../../../types/main";

export function printBoard(board: GameBoard | null) {
  if (!board){
    return "Invalid Board";
  }

  let out: string = ""
  for (let i = 0; i < board.length; i++) {
    out += `${board[i].join("")}\n`
  }
  return out;
}
