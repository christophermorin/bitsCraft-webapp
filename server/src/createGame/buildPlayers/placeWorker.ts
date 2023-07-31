import { Player, Unit, GameBoard } from "../../../types/main";

export function placeWorker(board: GameBoard, player: Player) {
  let dir: number[][] = [];

  if (player.name === "Player One")
    dir = [
      [0, -1],
      [1, -1],
    ];
  else {
    dir = [
      [0, -1],
      [-1, -1]
    ]
  }

  let {point} = player.headquarters[0];
  for (let i = 0; i < dir.length; i++){
    point.y += dir[i][0];
    point.x += dir[i][1];
  }

  const newWorkerUnit: Unit = {
    class: "worker",
    owner: player.name,
    health: 10,
    attack: 1,
    defence: 2,
    movement: 4
  }
  board[point.y][point.x].unit = newWorkerUnit;
  player.vision[point.y][point.x] = true;

  // Update player vision
  const visionDir: number[][] = [
    [-1,0],
    [0, 1],
    [1, 0],
    [1, 0],
    [0, -1],
    [0, -1],
    [-1, 0],
    [-1, 0]
  ]
  const workerPlacement = board[point.y][point.x].point
  for (let i = 0; i < visionDir.length; i++){
    const [y, x] = visionDir[i]
    if(board[workerPlacement.y + y] === undefined || board[workerPlacement.x + x] === undefined){
      continue;
    }
    player.vision[workerPlacement.y + y][workerPlacement.x + x] = true;
  }


}
