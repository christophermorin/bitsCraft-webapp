import { getRandomPoint } from "../utils/getRandomPoint";
import { GameBoard, ScanPoint } from "../../../types/main";

const dir = [
  [-1, -1],
  [-1, 0],
  [-1, +1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1]
]

function placeCliffs(
  board: GameBoard,
  defaultTile: string,
  curr: ScanPoint,
  area: number,
  seen: boolean[][]
): GameBoard {

 if (curr.y <= 0 || curr.y >= board.length || curr.x <= 0 || curr.x >= board[0].length){
  return board;
 }

  if (curr.y < 5 || curr.y > (board.length - 5)){
    return board;
  }

  if (seen[curr.y][curr.x]){
    return board;
  }

  if (board[curr.y][curr.x] !== defaultTile){
    return board;
  }

  seen[curr.y][curr.x] = true;
  const chanceToChangeTerrain = Math.floor(Math.random() * 10);
  if (chanceToChangeTerrain >= 5){
      board[curr.y][curr.x] = " X ";
  }

  for (let i = 0; i < area; i++){
      for (let j = 0; j < dir.length; j++){
        const [y, x] = dir[j];
        placeCliffs(board, defaultTile, {y: curr.y + y, x: curr.x + x}, area - 1 , seen)

      }
      }

  return board;
}

export function buildCliffs(board: GameBoard): GameBoard {
  const point = getRandomPoint(board.length, board[0].length);

  // if (!point) {
  //   console.log("Error: Scan point invalid in 'buildCliffs'");
  //   return null;
  // }

  const areaToScan = Math.floor(Math.random() * 3);
  const seen = Array.from({ length: board.length }, () =>
    Array<boolean>(board[0].length).fill(false)
  );

  const boardWithCliffs = placeCliffs(board, " . ", point, 5, seen);

  return boardWithCliffs;
}
