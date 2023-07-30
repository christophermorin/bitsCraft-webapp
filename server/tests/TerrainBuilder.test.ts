import {expect, jest, describe, test} from '@jest/globals';
import { TerrainBuilder } from '../src/createGame/buildTerrain/TerrainBuilder';
import { defaultBoard } from './helpers/testBoards';

describe("TerrainBuilder and methods", () => {
  test("Instance of class created with methods", () => {
    const builder = new TerrainBuilder(defaultBoard())
    
    expect(builder).toBeDefined();
    expect(builder.buildTerrain).toBeDefined();
    expect(typeof builder.buildTerrain).toBe("function");
  }),
  test("Calling buildTerrain places adverse terrain", () => {
    const builder = new TerrainBuilder(defaultBoard());
    builder.buildTerrain(" 🗻");
    // Not a good test at all, using a nested loop. Bad bad bad.
    let hasTerrain: boolean = false;
    for (let i = 0; i < builder.board.length; i++){
      for (let j = 0; j < builder.board[0].length; j++){
        if(builder.board[i][j].face === " 🗻"){
          hasTerrain = true;
          break;
        }
      }
    }
    expect(hasTerrain).toBe(true);
  });
  test("buildTerrain throws error when not passed a terrain", () => {
    const builder = new TerrainBuilder(defaultBoard());
    expect(() => builder.buildTerrain("")).toThrowError("Terrain Builder requires a terrain: 🗻, 🌲")
  })
})
