import { ScanPoint } from "../../../types/main";
// Getting a random point on the board
// Limits the selection by 5 from top and bottom of board to give 
// room for player bases.

export function getRandomPoint(boardHeight: number, boardWidth: number): ScanPoint {
  let yPos: number = 0;
  let xPos: number = 0;

  while (yPos < 5 || yPos > (boardHeight - 5)){
    yPos = Math.floor(Math.random() * boardHeight);
    xPos = Math.floor(Math.random() * boardWidth);
  }

  const scanPoint: ScanPoint = {
    y: yPos,
    x: xPos
  }

  return scanPoint;
}