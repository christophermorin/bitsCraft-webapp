import { ResourceBuilder } from "./ResourceBuilder";
import { GameBoard } from "../../../types/main";

export function buildResourceNodes(gameboard: GameBoard){
  const builder = new ResourceBuilder(gameboard);
  builder.buildNodes()
}