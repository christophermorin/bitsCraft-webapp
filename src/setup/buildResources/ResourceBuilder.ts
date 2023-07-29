import { GameBoard } from "../../../types/main";

export class ResourceBuilder {
  private board: GameBoard;
  private centerNodesPlaced: number;
  private centerOfBoard: number;

  constructor(board: GameBoard) {
    this.board = board;
    this.centerNodesPlaced = 0;
    this.centerOfBoard = Math.floor(this.board.length / 2);
  }

  buildNodes() {
    const width = this.board[0].length;

    this.centerNodes(width);
    // Top half of board
    this.playerAreaNodes(
      this.centerOfBoard - Math.floor(this.centerOfBoard / 2)
    );
    // Bottom half of board
    this.playerAreaNodes(
      this.centerOfBoard + Math.floor(this.centerOfBoard / 2)
    );
  }

  private scan(point: { y: number; x: number }): boolean {
    if (!point) {
      return false;
    }

    let dir = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, +1],
      [1, -1],
      [1, +0],
      [1, +1],
    ];

    for (let i = 0; i < dir.length; i++) {
      const [y, x] = dir[i];
      if (this.board[point.y + y][point.x + x].face !== " 🗻") {
        return true;
      }
    }
    return false;
  }

  private place(point: { y: number; x: number }): void {
    this.board[point.y][point.x].face = " 💎";
    this.board[point.y][point.x].value = 500;
  }

  private centerNodes(width: number) {
    let stepByTen = 10;
    while (stepByTen <= width) {
      const point = { y: this.centerOfBoard, x: stepByTen - 5 };

      if (this.scan(point)) {
        this.place(point);
        this.centerNodesPlaced++;
        stepByTen += 10;
      } else {
        stepByTen++
        continue;
      }
    }
  }

  private playerAreaNodes(row: number): void {
    let amountOfNodes = Math.floor(this.centerNodesPlaced / 2);

    while (amountOfNodes) {
      const xPos = Math.floor(Math.random() * (this.board[0].length - 1)) + 1
      // if (xPos < 1 || xPos > this.board.length - 1) {
      //   continue;
      // }
      const point = { y: row, x: xPos };
      if (this.scan(point)) {
        this.place(point);
        amountOfNodes--;
      } else {
        continue;
      }
    }
  }
}
