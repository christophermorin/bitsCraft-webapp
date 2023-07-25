import { GameBoard } from "../../../types/main"
import { placeTerrain } from "../utils/placeTerrain";
import { getRandomPoint } from "../utils/getRandomPoint";

export class TerrainBuilder{
  public board: GameBoard;

  constructor(board: GameBoard) {
    this.board = board;
  }
  
  buildTerrain(terrain: string, freq: number){
    this.placeTerrainTile(this.board, terrain, freq);
  }

  private placeTerrainTile(board: GameBoard, terrain: string, freq: number): void {
  const point = getRandomPoint(board.length, board[0].length);
  const seen = Array.from({ length: board.length }, () =>
    Array<boolean>(board[0].length).fill(false)
  );

  placeTerrain(board, " ⬛", terrain, point, 5, seen);
}

}