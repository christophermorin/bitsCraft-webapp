import * as readline from 'node:readline/promises';

export type UserInterface = readline.Interface;

export type GameBoard = Tile[][];

export type GameContext = {
  board: GameBoard,
  players: {
    playerOne: Player,
    playerTwo: Player,
  }
}

export type Player = {
  name: string,
  headquarters: Tile[],
  vision: boolean[][],
  resources: number,
}

export type Unit = {
  class: string,
  owner: string,
  health: number,
  attack: number,
  defence: number,
  movement: number
}

export type Tile = {
  terrain: string,
  unit: Unit | null 
  owner: string | null,
  health: number | null,
  value: number | null,
  point: {y: number, x: number}
}



