import { UserInterface, GameBoard, Tile } from "../../types/main"
import { scanPoint } from "../actions/scanPoint";
import { selectPoint } from "../actions/selectPoint";
import { gameContext } from "../setup/buildGameContext";
import { printBoard } from "../utils/printBoard";













export async function build(board: GameBoard): Promise<string>{
  const point = await selectPoint();
  const validPoint: boolean = scanPoint(board, point);

  if(!validPoint){
    console.log("Invalid terrain");
  }
  console.log(board[point.y][point.x]);
  return board[point.y][point.x].face
}