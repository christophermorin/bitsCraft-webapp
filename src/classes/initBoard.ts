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
      Array<string>(this.width).fill(" ⬛")
    );

    this.setIndiceLables(this.height);

    return this.board;
  }
  
  private setIndiceLables(height: number) {
    for (let i = 0; i < height; i++) {
      if (i > 9) {
        this.board[i][0] = ` ${i}`;
        this.board[0][i] = ` ${i}`;
      } else {
        this.board[i][0] = ` ${i} `;
        this.board[0][i] = `  ${i}`;
      }
    }
  }
}
