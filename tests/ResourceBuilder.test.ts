import {expect, jest, test} from '@jest/globals';
import {ResourceBuilder} from '../src/setup/buildResources/ResourceBuilder'
import { boardWithTerrainPlayers } from './helpers/testBoards';
import { GameBoard } from '../types/main';

describe("ResourceBuilder init", () => {
  test("ResourceBuilder instance created", () => {
    const instance = new ResourceBuilder(boardWithTerrainPlayers());
    expect(instance).toBeDefined();
    expect(instance).toHaveProperty("buildNodes");
    expect(typeof instance.buildNodes).toBe("function");
  });
})

// describe("Conditional checks in private methods", () => {
//   let testBoard: GameBoard = [];
//   beforeEach(() => {
//     testBoard = buildTestBoard()
//     const instance = new ResourceBuilder(testBoard);
//     instance.buildNodes();
//   });
// })

describe("Resource nodes are placed correctly", () => {
  let testBoard: GameBoard = [];
  beforeEach(() => {
    testBoard = boardWithTerrainPlayers();
    const instance = new ResourceBuilder(testBoard);
    instance.buildNodes();
  });
  test("Center line nodes placed", () => {
    const center = Math.floor(testBoard.length / 2);
    const centerRow = testBoard[center];
    const hasNodes = centerRow.filter(tile => tile === " 💎");
    expect(hasNodes).toHaveLength(3);
  });
  test("Top half nodes placed", () => {
    const center = Math.floor(testBoard.length / 2);
    const topRow = testBoard[center - Math.floor(center / 2)];

    const hasNodes = topRow.filter(tile => tile === " 💎");
    expect(hasNodes).toHaveLength(1);
  });
  test("Bottom half nodes placed", () => {
    const center = Math.floor(testBoard.length / 2);
    const bottomRow = testBoard[center + Math.floor(center / 2)];

    const nodes = bottomRow.filter(tile => tile === " 💎");
    expect(nodes).toHaveLength(1);
  });
  
})