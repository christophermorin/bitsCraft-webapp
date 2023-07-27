# Setup so far:

1. Init a board with a given height and width.
2. Populate that board with default tiles, and indice lables across the Y and X axis.
3. Pass default board to build terrain
4. Pass board with terrain to player builder, place two player positions
5. Pass board to resource builder. Builds nodes across the center line at regular X pos, and (centerNodes / 2) amount of nodes in each the top/bottom half and random X pos points.

## Algos/DS used so far

- Variation of the maze runner for terrain and player placements

## TODO:

-Test teardowns

## Known Bugs

- ResourceGenerator gets stuck in infinite loop during some build tests.

## Design Choices: ---- Hey dummy. Actually read these over time ----

1. Do I use dependencie injection with my TerrainBuilder class, passing in the walk/place tile function. Or, do I make the walk/place function a private method of my class?
   [x] - I opted to reduce external dependencies in my classes and use private methods instead. Happy accident that it condensed and reduced the scan/place terrain functions I had build previously.
   [x] - It also GREATLY reduced my tests. Since my methods are private, my tests needs now only check that the one public method on each class (their build methods) returns the desired results.

2. Do I use recursion to do the scanning process when placing terrain and resource nodes, or do it with iteration?
   [x] - I went with an interate approach. Recursion was fun but the iteration avoids any stack overflow (I had checks in place to avoid this anyways), and once again it made my methods much more compact and more SRP.

3. Deciding how to interact with the game. At first a simple console interface with readline. Now looking into creating a bash script and named pipes (FIFO) into the program.
   .
   .
   .
   .
   .
   .
   .
   .
   .
   .
   .
   .
   .
   .
   .

Slightly Behind The Times dev journey:

#### 27/07/23

-A bug remains in ResourceGenerator, stuck in an infinite loop during some game inits.
-------Could be occuring when EVERY tile surrounding scan point is a mountain?

-User actions. Began working on the game loop for the players to build structures (bunkers, baracks, etc).

-Added impassable, owner, fog, and point properties to Tile types. Adjusted board builders to assign values where needed.

-While creating player positions(HQ's and resource nodes) created tiles are now assigned correct properties (using the above create propserties)

-Created Player Type and player builder. Players have a name, headquarters array, with the coords of their HQ tiles, a resources count, and a visions array. Visions is a boolean array of [x,y] coords tracking if a player has revealed the tile at those coords. This will be used to create a fog of war effect.

-Game context created. Includes gameboard, and player objects.
-Game board now prints with fog of war. Only tiles seen by the player reveal their terrain.

-All tests reworked, small changes for all. PlayerBuilder tests created.

#### 26/07/23

- A few moments prior...

  - Built the default board init, TerrainBuilder (see design choices above), and PlayerBuilder classes. TDD the whole way down.

- Resource builder places an evenly distributed amount of nodes on the center line. Amount of nodes based on map width.
- Changed indice numbers style to bold magenta, because why not.
- Depending on how many resource were placed on center line, the builder now places HALF that amount in both the top half and bottom half
  of the map on a random X axis position, and -5/+5 Y position from center line. **can lead to unfair advantages for one player POS over another**
- ResourceBuilder tested
- All tests refactored to use board build helper functions
- Map build complete?
- Start of user interaction

---

- Unexpected early major overhall of tiles
  - Each tile is now an object node. This was done in anticipation of user actions on each node during the game loop
  - Tests refactored to use the Tile.face property to match tile string values when building/scanning the board.

---
