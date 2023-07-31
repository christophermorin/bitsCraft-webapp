import { GameBoard } from "../../../types/main";
import { PlayerPositions } from "./PlayersPositions";
import { PlayerBuilder } from "./PlayerBuilder";
import { Player } from "../../../types/main";
import { placeWorker } from "./placeWorker";


export function buildPlayers(gameboard: GameBoard): {playerOne: Player, playerTwo: Player}{
  const positions = new PlayerPositions(gameboard);
  positions.buildPlayerPositions()

  const players = new PlayerBuilder(gameboard)
  const playerOne = players.create(1);
  const playerTwo = players.create(2);

  placeWorker(gameboard, playerOne);
  placeWorker(gameboard, playerTwo);
  
  return {playerOne, playerTwo};
}

