import { UserInterface, GameBoard, Tile } from "../../types/main"
import { scanPoint } from "../actions/scanPoint";
import { selectPoint } from "../actions/selectPoint";

export async function build(board: GameBoard, rl: UserInterface): Promise<string>{
  const point = await selectPoint(rl);
  const validPoint: boolean = scanPoint(board, point)

  if(!validPoint){
    console.log("Invalid terrain")
  }
  console.log(board[point.y][point.x])
  return board[point.y][point.x].face
}