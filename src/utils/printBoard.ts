import { GameBoard } from "../../types/main";
import { GameContext } from "../../types/main";

export function printBoard(context : GameContext | null) {
  if (!context?.board) {
    return "Invalid Board";
  }

  let out: string = "";
  for (let i = 0; i < context.board.length; i++) {
    let row: string[] = [];

    for (let j = 0; j < context.board[i].length; j++){
      const tile = context.board[i][j];
      const playerHasSeenTile = context.players.playerOne.vision[i][j]
      if (tile.isBorder){
        row.push(`${tile.face}`);
      }
      else if (playerHasSeenTile){
        row.push(`${tile.face}`);
      } else {
        row.push(`${tile.fog}`);
      }
    }
    out += `${row.join("")}\n`
  }
  return out;
}
