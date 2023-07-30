import {expect, jest, test, describe} from '@jest/globals';
import { buildApp } from '../src/app'

describe("Testing app", () => {
  test("test", async () => {
      const app = buildApp()
  
      const response = await app.inject({
        method: 'GET',
        url: '/'
      })
      const resJSON = JSON.parse(response.body)
      expect(response.statusCode).toBe(200);
      expect(resJSON.context.board).toHaveLength(20);
      expect(resJSON.context.players.playerOne.name).toBe("Player One")
      expect(resJSON.context.players.playerTwo.name).toBe("Player Two")

      app.close();
  });
})