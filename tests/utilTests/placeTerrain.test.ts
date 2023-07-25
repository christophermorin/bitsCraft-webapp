import {expect, jest, test} from '@jest/globals';
import { placeTerrain } from '../../src/classes/utils/placeTerrain';
import { helperGameBoard } from '../helpers/helpers';
import { InitBoard } from '../../src/classes/InitBoard';

describe("Placing adverse terrain on board", () => {
  let defaultBoard: string[][];
  let testBoard: string[][];
  let seen: boolean[][];
  
  beforeEach(() => {
    // Create a blank default board before each test
    const init = new InitBoard(15, 15);
    defaultBoard = init.buildBoard();
    testBoard = init.buildBoard();
    // Creating seen array
    seen = Array.from({ length: defaultBoard.length }, () => Array<boolean>(helperGameBoard[0].length).fill(false))
  });

  describe("placeTerrain conditionals", () => {
  test("returns current board state when no area passed", () => { 
    const boardUnchanged = placeTerrain(testBoard, " ⬛", " 🗻", {y: 5, x: 5}, 0, seen);
    expect(boardUnchanged).toEqual(defaultBoard);
  }),
  test("check for invalid Y axis ScanPoints, board is returned unchanged", () => {
    // Y values <=0 || >= board.length
    // This prevents both going off the board, and overriding the indice lables with adverse terrain
    const yZero = placeTerrain(testBoard, " ⬛", " 🗻", {y: 0, x: 5}, 4, seen);
    expect(yZero).toEqual(defaultBoard);
    const yGreaterThanOrEqual = placeTerrain(testBoard, " ⬛", " 🗻", {y: 15, x: 6}, 4, seen);
    expect(yGreaterThanOrEqual).toEqual(defaultBoard);
  }),
  test("check for invalid X axis ScanPoints, board is returned unchanged", () => {
    // X values <=0 || >= board.length
    // This prevents both going off the board, and overriding the indice lables with adverse terrain
    const xZero = placeTerrain(testBoard, " ⬛", " 🗻", {y: 5, x: 0}, 4, seen);
    expect(xZero).toEqual(defaultBoard);
    const xGreaterThanOrEqual = placeTerrain(testBoard, " ⬛", " 🗻", {y: 5, x: 15}, 4, seen);
    expect(xGreaterThanOrEqual).toEqual(defaultBoard);
  })
  test("If true in seen array, return current board state", () => {
    const allTrue = Array.from({ length: defaultBoard.length }, () => Array<boolean>(helperGameBoard[0].length).fill(true));
    const returnedUnchangedOnSeen = placeTerrain(testBoard, " ⬛", " 🗻", {y: 5, x: 5}, 4, allTrue);
    expect(returnedUnchangedOnSeen).toEqual(defaultBoard);
  })
  })
  describe("Successfully applies adverse terrain", () => {
    test("Has adverse terrain", async () => {
      const hasAdverse = placeTerrain(testBoard, " ⬛", " 🗻", {y: 5, x: 5}, 4, seen);
      expect(hasAdverse).not.toEqual(defaultBoard);
      
    })
    // test("Has random adverse terrain", () => {
    //   const init = new InitBoard(15, 15);
    //   const blankBoard = init.buildBoard()

    //   const hasAdverseOne = placeTerrain(testBoard, " ⬛", " 🗻", {y: 5, x: 5}, 4, seen);
    //   const hasAdverseTwo = placeTerrain(blankBoard, " ⬛", " 🗻", {y: 5, x: 5}, 4, seen);
    //   expect(hasAdverseOne).not.toEqual(defaultBoard);
    //   console.log(hasAdverseOne, hasAdverseTwo, defaultBoard)
      
    //   expect(hasAdverseTwo).not.toEqual(defaultBoard);
    //   expect(hasAdverseTwo).not.toEqual(hasAdverseOne);

    // })
  })
})

