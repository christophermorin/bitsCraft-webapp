import { GameBoard } from "../../types/main";
import { Tile } from "../../types/main";

export function scanPoint(board: GameBoard, point: {y: number, x: number}): boolean {
  
  if (!board[point.y]){
    return false;
  }
  
  const tile: Tile = board[point.y][point.x];

  // if (!tile.seen){
  //   return false;
  // }

  // if (tile.terrain === "impassable"){
  //   return false;
  // }

  return true;
}