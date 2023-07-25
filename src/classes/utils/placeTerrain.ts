import { GameBoard } from "../../../types/main";
import { ScanPoint } from "../../../types/main";

const dir = [
  [-1, -1],
  [-1, 0],
  [-1, +1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

export function placeTerrain(
  board: GameBoard,
  defaultTile: string,
  terrainTile: string,
  curr: ScanPoint,
  area: number,
  seen: boolean[][]
): GameBoard {
  if (area === 0) {
    return board;
  }
  if (curr.y <= 0 || curr.y >= board.length) {
    return board;
  }
  if (curr.x <= 0 || curr.x >= board[0].length) {
    return board;
  }

  if (curr.y < 4 || curr.y > board.length - 4) {
    return board;
  }

  if (seen[curr.y][curr.x]) {
    return board;
  }

  // if (board[curr.y][curr.x] !== defaultTile) {
  //   return board;
  // }

  seen[curr.y][curr.x] = true;
  const chanceToChangeTerrain = Math.floor(Math.random() * 10);
  if (chanceToChangeTerrain >= 6) {
    board[curr.y][curr.x] = terrainTile;
  }

  for (let j = 0; j < dir.length; j++) {
    const [y, x] = dir[j];
    placeTerrain(
      board,
      defaultTile,
      terrainTile,
      { y: curr.y + y, x: curr.x + x },
      area - 1,
      seen
    );
  }

  return board;
}
