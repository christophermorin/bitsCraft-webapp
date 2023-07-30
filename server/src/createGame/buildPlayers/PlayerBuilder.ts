import { Player, GameBoard, Tile } from "../../../types/main";

export class PlayerBuilder {
  private board: GameBoard;

  constructor(board: GameBoard) {
    this.board = board;
  }
  
  create(n: number) {
    const seen = Array.from({ length: this.board.length }, () =>
      Array<boolean>(this.board[0].length).fill(false)
    );
    const player: Player = {
      name: n === 1 ? "Player One" : "Player Two",
      headquarters: [],
      vision: seen,
      resources: 1000,
    };
    this.setHqCoords(player);
    this.setPlayerVision(player);

    return player;
  }
  private setHqCoords(player: Player) {
    let hqTop: Tile[] = [];
    let hqBottom: Tile[] = [];
    
    if (player.name === "Player One") {
      hqTop = this.board[2].filter((tile) => tile.face === "\x1b[34m" + "\x1b[1m" +  " HQ" + "\x1b[0m");
      hqBottom = this.board[3].filter((tile) => tile.face === "\x1b[34m" + "\x1b[1m" +  " HQ" + "\x1b[0m");
      player.headquarters = player.headquarters.concat(hqTop, hqBottom);
    }

    if (player.name === "Player Two") {
      hqBottom = this.board[this.board.length - 2].filter(
        (tile) => tile.face === "\x1b[31m" + "\x1b[1m" +  " HQ" + "\x1b[0m"
      );
      hqTop = this.board[this.board.length - 3].filter(
        (tile) => tile.face === "\x1b[31m" + "\x1b[1m" +  " HQ" + "\x1b[0m"
      );
      player.headquarters = player.headquarters.concat(hqBottom, hqTop);
    }
  }

  private setPlayerVision(player: Player) {
    const {y, x} = player.headquarters[0].point;
    let dir: number[][] = [];

    if (player.name === "Player One"){
      dir = [
        [-1, -1],
        [0, -1],
        [1, -1],
        [2, -1],
        [2, 0],
        [2, 1],
        [2, 2],
        [1, 2],
        [0, 2],
        [-1, 2],
        [-1, 1],
        [-1, 0]
      ]
    }

    if (player.name === "Player Two"){
      dir = [
        [1,-1],
        [0,-1],
        [-1,-1],
        [-2, -1],
        [-2, 0],
        [-2, 1],
        [-2, 2],
        [-1, 2],
        [0, 2],
        [1, 2],
        [1, 1],
        [1, 0]
      ];
    }

    for (let i = 0; i < dir.length; i++){
      const move = dir[i];
      player.vision[y+move[0]][x+move[1]] = true;
    }

    player.headquarters.forEach((tile) => {
      player.vision[tile.point.y][tile.point.x] = true;
    });
  }
}
