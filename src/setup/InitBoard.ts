import { Tile } from "../../types/main";

export class InitBoard {
  public board: Tile[][];
  public height: number;
  public width: number;

  constructor(height: number, width: number) {
    this.board = [];
    this.height = height;
    this.width = width;
  }

  buildBoard() {
    // Build board with default tiles and col/row labels
    let yPos = 0;
    this.board = Array.from({ length: this.height }, () => {
      const row: Tile[] = [];
      for (let i = 0; i < this.width; i++) {
        row.push(this.createNode(yPos, i));
      }
      yPos++
      return row;
    });

    this.setIndiceLables(this.height, this.width);
    return this.board;
  }

  private setIndiceLables(height: number, width: number) {
    // Y axis
    for (let i = 0; i < height; i++) {
      this.board[i][0].isBorder = true;
      if (i > 9) {
        this.board[i][0].face = "\x1b[35m" + "\x1b[1m" + ` ${i}` + "\x1b[0m";
      } else {
        this.board[i][0].face = "\x1b[35m" + "\x1b[1m" + ` ${i} ` + "\x1b[0m";
      }
    }
    // X axis
    for (let i = 0; i < width; i++){
      this.board[0][i].isBorder = true;
      if (i > 9){
        this.board[0][i].face = "\x1b[35m" + "\x1b[1m" + ` ${i}` + "\x1b[0m";
      } else {
        this.board[0][i].face = "\x1b[35m" + "\x1b[1m" + `  ${i}` + "\x1b[0m";
      }
    }
  }

  private createNode(y: number, x: number): Tile {
    const defaultTile: Tile = {
      face: " . ",
      fog: " ⬛",
      terrain: "open",
      impassable: false,
      isBorder: false,
      owner: null,
      health: null,
      value: null,
      point: {y: y, x: x}
    };
    return defaultTile;
  }
}
