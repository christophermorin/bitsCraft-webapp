import {expect, jest, test} from '@jest/globals';
import { selectPoint } from '../../src/actions/selectPoint'
import { rl } from '../../src/gameLoop/startPrompt';

describe("Select point", () => {
  beforeEach(() => {
    jest.spyOn(rl, 'question').mockReset();
  })
  test("Returns valid point", async () => {
    jest.spyOn(rl, 'question')
      .mockResolvedValueOnce('2') // Y position
      .mockResolvedValueOnce('5'); // X position

      const result = await selectPoint();
      expect(result).toEqual({ y: 2, x: 5 });
  });
  afterEach(() => {
    jest.clearAllMocks()
    rl.close()
  })
})
