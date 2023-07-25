import {expect, jest, test} from '@jest/globals';
import { TerrainBuilder } from '../src/classes/buildTerrain/TerrainBuilder';
import { helperGameBoard } from './helpers/helpers';

describe("TerrainBuilder and methods", () => {
  test("Instance of class created with methods", () => {
    const builder = new TerrainBuilder(helperGameBoard)
    
    expect(builder).toBeDefined();
    expect(builder.buildTerrain).toBeDefined();
  }),
  test("Calling buildTerrain places adverse terrain", () => {
    const builder = new TerrainBuilder(helperGameBoard);
    const withoutAdverse = builder.board.findIndex((tile, i) => tile[i] === " 🗻");
    expect(withoutAdverse).toBe(-1);

    builder.buildTerrain(" 🗻");
    const withAdverse = builder.board.findIndex((tile, i) => tile[i] === " 🗻");
    expect(withAdverse).toBeDefined();
  })
})
