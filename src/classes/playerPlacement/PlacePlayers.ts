import { GameBoard } from "../../../types/main";

export class PlacePlayers {
  private board: GameBoard;

  constructor(board: GameBoard) {
    this.board = board;
  }

  buildPlayerPositions(){
    this.placePlayerOne()
    this.placePlayerTwo();
  }
  // place player one
  private placePlayerOne(){
    const {y, x} = this.getBaseLocation(1);
    const baseDirs = [
      [0, 0],
      [0, 1],
      [1, 1],
      [1, 0]
    ]
    const nodeDirs = [
      [-1,-1],
      [-1, 0],
      [-1, 1],
      [-1, 2]
    ]

    for (let i = 0; i < baseDirs.length; i++){
      let move = baseDirs[i];
      this.board[y+move[0]][x+move[1]] = " 🟦";
    }

     for (let i = 0; i < nodeDirs.length; i++){
      let move = nodeDirs[i];
      this.board[y+move[0]][x+move[1]] = " 💎";
    }
  }
  // place player two
  private placePlayerTwo(){
    const {y, x} = this.getBaseLocation(2);
    const baseDirs = [
      [0, 0],
      [0, 1],
      [1, 1],
      [1, 0]
    ]
    const nodeDirs = [
      [2, -1],
      [2, 0],
      [2, 1],
      [2, 2]
    ]
    
    

    for (let i = 0; i < baseDirs.length; i++){
      let move = baseDirs[i];
      this.board[y+move[0]][x+move[1]] = "🟥";
    }

    for (let i = 0; i < nodeDirs.length; i++){
      let move = nodeDirs[i];
      this.board[y+move[0]][x+move[1]] = " 💎";
    }
  }

  // select point
  private getBaseLocation(player: number) {
    let yPos: number = 0;
    let xPos: number = 0;

    if (player === 1) {
      yPos = 2;
    } else {
      yPos = this.board.length - 3;
    }
    while (xPos < 4 || xPos >= this.board[0].length - 4) {
      xPos = Math.floor(Math.random() * this.board[0].length);
    }

    const location = {y: yPos, x: xPos};
    return location;

  }
}
