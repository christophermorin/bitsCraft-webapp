export class initBoard {
  public board: string[][];
  public height: number;
  public width: number;

  constructor(height: number, width: number){
    this.board = [];
    this.height = height;
    this.width = width;
  }

  buildBoard(){
    // Build board and fill with default tiles
    this.board = Array.from({ length: this.height }, () => Array<string>(this.width).fill(' . '));

    // Init first column to indice label
    for (let i = 0; i < this.height; i++){
    if (i > 9){
      this.board[i][0] = `${i} `;
    }
    else {
      this.board[i][0] = ` ${i} `;
    }
   }

   // Init first row to indice label
   for (let i = 0; i < this.width; i++){
    if (i > 9){
      this.board[0][i] = `${i} `;
    }
    else {
      this.board[0][i] = ` ${i} `
    }
   }

   return this.board;
  }
}
