import { TerrainBuilder } from "./TerrainBuilder";
import { GameBoard } from "../../../types/main";

export function buildTerrain (gameboard: GameBoard){
  const builder = new TerrainBuilder(gameboard);
  for (let i = 0; i < gameboard.length / 2; i++){
    builder.buildTerrain("mountain");
    builder.buildTerrain("forest");
  }
}