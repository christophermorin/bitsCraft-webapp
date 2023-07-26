export type GameBoard = Tile[][];

export type Tile = {
  face: string, // 🗻💎 . etc
  terrain: string, // open, snek, impassable, building, unit, resource
  health: number | null,
  value: number | null
}