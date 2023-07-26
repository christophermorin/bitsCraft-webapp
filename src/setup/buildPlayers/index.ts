import { PlayerBuilder } from "./PlayersBuilder";
import { GameBoard } from "../../../types/main";

export function buildPlayerPositions(gameboard: GameBoard): void{
  const players = new PlayerBuilder(gameboard);
  players.buildPlayerPositions()
}