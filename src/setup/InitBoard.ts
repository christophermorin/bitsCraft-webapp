export class InitBoard {
  public board: string[][];
  public height: number;
  public width: number;

  constructor(height: number, width: number) {
    this.board = [];
    this.height = height;
    this.width = width;
  }

  buildBoard() {
    // Build board with default tiles and col/row labels
    this.board = Array.from({ length: this.height }, () =>
      Array<string>(this.width).fill(" . ")
    );

    this.setIndiceLables(this.height, this.width);
    return this.board;
  }
  
  private setIndiceLables(height: number, width: number) {
    // Y axis
    for (let i = 0; i < height; i++) {
      if (i > 9) {
        this.board[i][0] = "\x1b[35m" + "\x1b[1m" + ` ${i}` + "\x1b[0m";
      } else {
        this.board[i][0] = "\x1b[35m" + "\x1b[1m" + ` ${i} ` + "\x1b[0m";
      }
    }
    // X axis
    for (let i = 0; i < width; i++){
      if (i > 9){
        this.board[0][i] = "\x1b[35m" + "\x1b[1m" + ` ${i}` + "\x1b[0m";
      } else {
        this.board[0][i] = "\x1b[35m" + "\x1b[1m" + `  ${i}` + "\x1b[0m";
      }
      
    }
  }
}
