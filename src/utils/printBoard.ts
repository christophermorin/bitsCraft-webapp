import { GameBoard } from "../../types/main";

export function printBoard(board: GameBoard | null) {
  if (!board) {
    return "Invalid Board";
  }
  let out: string = "";
  for (let i = 0; i < board.length; i++) {
    let row: string[] = [];
    for (let j = 0; j < board[i].length; j++){
      row.push(`${board[i][j].face}`)
    }
    out += `${row.join("")}\n`
  }
  return out;
}
