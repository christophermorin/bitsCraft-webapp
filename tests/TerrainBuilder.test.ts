import {expect, jest, test} from '@jest/globals';
import { TerrainBuilder } from '../src/setup/buildTerrain/TerrainBuilder';
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
    const withoutAdverse = builder.board.findIndex((tile, i) => tile[i] === " 🗻");
    expect(withoutAdverse).toBe(-1);

    builder.buildTerrain(" 🗻");
    const withAdverse = builder.board.findIndex((tile, i) => tile[i] === " 🗻");
    expect(withAdverse).toBeDefined();
  })
})
