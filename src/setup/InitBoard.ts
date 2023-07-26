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
    const defaultTile: Tile = {
      face: " . ",
      terrain: "open",
      health: null,
      value: null,
    };
    // this.board = Array.from({ length: this.height }, () =>
    //   Array<Tile>(this.width).map(() => this.createNode())
    // );
    this.board = Array.from({ length: this.height }, () => {
      const row: Tile[] = [];
      for (let i = 0; i < this.width; i++) {
        row.push(this.createNode());
      }
      return row;
    });

    this.setIndiceLables(this.height, this.width);
    return this.board;
  }

  private setIndiceLables(height: number, width: number) {
    // Y axis
    for (let i = 0; i < height; i++) {
      if (i > 9) {
        this.board[i][0].face = "\x1b[35m" + "\x1b[1m" + ` ${i}` + "\x1b[0m";
      } else {
        this.board[i][0].face = "\x1b[35m" + "\x1b[1m" + ` ${i} ` + "\x1b[0m";
      }
    }
    // X axis
    for (let i = 0; i < width; i++){
      if (i > 9){
        this.board[0][i].face = "\x1b[35m" + "\x1b[1m" + ` ${i}` + "\x1b[0m";
      } else {
        this.board[0][i].face = "\x1b[35m" + "\x1b[1m" + `  ${i}` + "\x1b[0m";
      }
    }
  }

  private createNode(): Tile {
    const defaultTile: Tile = {
      face: " . ",
      terrain: "open",
      health: null,
      value: null,
    };
    return defaultTile;
  }
}
