import { GameBoard } from "../../../types/main";

export class PlayerBuilder {
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
    const {y, x} = this.setBaseLocation(1);
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
      // Sets HQ color to blue, bold, then resets back to default. Reset prevents all text after HQ from also turning blue.
      this.board[y+move[0]][x+move[1]].face = "\x1b[34m" + "\x1b[1m" +  " HQ" + "\x1b[0m";
    }

     for (let i = 0; i < nodeDirs.length; i++){
      let move = nodeDirs[i];
      this.board[y+move[0]][x+move[1]].face = " 💎";
    }
  }

  private placePlayerTwo(){
    const {y, x} = this.setBaseLocation(2);
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
      // Sets HQ color to red, bold, then resets back to default. Reset prevents all text after HQ from also turning red.
      this.board[y+move[0]][x+move[1]].face = "\x1b[31m" + "\x1b[1m" +  " HQ" + "\x1b[0m";
    }

    for (let i = 0; i < nodeDirs.length; i++){
      let move = nodeDirs[i];
      this.board[y+move[0]][x+move[1]].face = " 💎";
    }
  }

  private setBaseLocation(player: number) {
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
