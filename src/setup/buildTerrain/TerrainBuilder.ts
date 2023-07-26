import { GameBoard } from "../../../types/main";

export class TerrainBuilder {
  public board: GameBoard;

  constructor(board: GameBoard) {
    this.board = board;
  }

  buildTerrain(terrain: string) {
    this.placeTerrainTile(this.board, terrain);
  }

  private placeTerrainTile(board: GameBoard, terrain: string): void {
    const seen = Array.from({ length: board.length }, () =>
      Array<boolean>(board[0].length).fill(false)
    );
    let point = this.getStartPoint(board.length, board[0].length);

    for (let i = 0; i < 20; i++) {
      let move = this.getRandomDirection();
      point = { y: point.y + move.y, x: point.x + move.x };

      if (point.y <= 0 || point.y >= board.length) {
        continue;
      }
      if (point.x <= 0 || point.x >= board[0].length) {
        continue;
      }

      if (point.y < 4 || point.y > board.length - 4) {
        continue;
      }

      if (seen[point.y][point.x]) {
        continue;
      }

      seen[point.y][point.x] = true;
      board[point.y][point.x] = terrain;
    }

  }
  private getStartPoint(height: number, width: number) {
    let yPos: number = 0;
    let xPos: number = 0;

    while (yPos < 5 || yPos > height - 5) {
      yPos = Math.floor(Math.random() * height);
      xPos = Math.floor(Math.random() * width);
    }

    const startPoint: { y: number; x: number } = {
      y: yPos,
      x: xPos,
    };
    return startPoint;
  }
  
  private getRandomDirection() {
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

    const direction = dir[Math.floor(Math.random() * dir.length)];
    const moveToPoint = { y: direction[0], x: direction[1] };
    return moveToPoint;
  }
}
