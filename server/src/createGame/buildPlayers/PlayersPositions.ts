import { GameBoard } from "../../../types/main";

export class PlayerPositions {
  private board: GameBoard;

  constructor(board: GameBoard) {
    this.board = board;
  }

  buildPlayerPositions(){
    this.placePlayerOne()
    this.placePlayerTwo();
  }

  private placePlayerOne(){
    // Get starter point
    const {y, x} = this.setBaseLocation(1);
    // Directions to travel while placing base tiles
    const baseDirs = [
      [0, 0],
      [0, 1],
      [1, 1],
      [1, 0]
    ]
    // Directions to travel while placing resource node tiles
    const nodeDirs = [
      [-1,-1],
      [-1, 0],
      [-1, 1],
      [-1, 2]
    ]

    for (let i = 0; i < baseDirs.length; i++){
      let move = baseDirs[i];
      const hqTile = this.board[y+move[0]][x+move[1]];

      // Sets HQ color to blue, bold, then resets back to default. Reset prevents all text after HQ from also turning blue.
      hqTile.terrain = "HQ";
      hqTile.owner = "Player One";
      hqTile.health = 100;
      hqTile.point = {y: y+move[0], x: x+move[1] };
    }

    // Places starter resource nodes next to base HQs
     for (let i = 0; i < nodeDirs.length; i++){
      let move = nodeDirs[i];
      this.board[y+move[0]][x+move[1]].value = 500;
      this.board[y+move[0]][x+move[1]].terrain = "resource";
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
      const hqTile = this.board[y+move[0]][x+move[1]]
      hqTile.terrain = "HQ";
      hqTile.owner = "Player Two";
      hqTile.health = 100;
      hqTile.point = {y: y+move[0], x: x+move[1] };
    }

    for (let i = 0; i < nodeDirs.length; i++){
      let move = nodeDirs[i];
      this.board[y+move[0]][x+move[1]].terrain = "resource";
      this.board[y+move[0]][x+move[1]].value = 500;
    }

    return
  }

  private setBaseLocation(player: number) {
    let yPos: number = 0;
    let xPos: number = 0;

    if (player === 1) {
      yPos = 1;
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
