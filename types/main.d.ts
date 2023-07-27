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

export type Tile = {
  face: string, // 🗻💎 . etc
  fog: string,
  terrain: string, // open, forest, impassable, building, unit, resource, headquarters
  isBorder: boolean,
  impassable: boolean,
  owner: string | null,
  health: number | null,
  value: number | null,
  point: {y: number, x: number}
}

export type Player = {
  name: string,
  headquarters: Tile[],
  vision: boolean[][],
  resources: number,
}
