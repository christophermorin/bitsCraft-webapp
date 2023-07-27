import {expect, jest, test} from '@jest/globals';
import { PlayerBuilder } from "../src/setup/buildPlayers/PlayerBuilder"
import { boardWithTerrainPlayers } from './helpers/testBoards';

describe("PlayerBuilder class init", () => {
  test("Instance of PlayerBuilder created", () => {
    const instance = new PlayerBuilder(boardWithTerrainPlayers());
    expect(instance).toBeDefined();
    expect(instance).toHaveProperty("create");
    expect(typeof instance.create).toBe("function");
  })
})

describe("Players are created with updated properties", () => {
  test("Player One is created", () => {
    const builder = new PlayerBuilder(boardWithTerrainPlayers());
    const player = builder.create(1);

    expect(player).toBeDefined();
    expect(player.name).toBe("Player One");
    expect(player.headquarters).toHaveLength(4);
    expect(player.resources).toBe(1000);

    // Based off of board length returned from boardWithTerrainPlayers. 20x30.
    expect(player.vision).toHaveLength(20);
  });
  test("Player Two is created", () => {
    const builder = new PlayerBuilder(boardWithTerrainPlayers());
    const player = builder.create(2);

    expect(player).toBeDefined();
    expect(player.name).toBe("Player Two");
    expect(player.headquarters).toHaveLength(4);
    expect(player.resources).toBe(1000);

    // Based off of board length returned from boardWithTerrainPlayers. 20x30.
    expect(player.vision).toHaveLength(20);
  });

})
