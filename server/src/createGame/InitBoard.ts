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
    let yPos = 0;
    this.board = Array.from({ length: this.height }, () => {
      const row: Tile[] = [];
      for (let i = 0; i < this.width; i++) {
        row.push(this.createNode(yPos, i));
      }
      yPos++
      return row;
    });

    return this.board;
  }

  private createNode(y: number, x: number): Tile {
    const defaultTile: Tile = {
      terrain: "open",
      unit: null,
      owner: null,
      health: null,
      value: null,
      point: {y: y, x: x}
    };
    return defaultTile;
  }
}
