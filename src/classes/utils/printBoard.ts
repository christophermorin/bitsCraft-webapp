export function printBoard(board: string[][]) {
  let out: string = ""
  for (let i = 0; i < board.length; i++) {
    out += `${board[i].join("")}\n`
  }
  return out;
}
