# Setup so far:

1. Init a board with a given height and width.
2. Populate that board with default tiles, and indice lables across the Y and X axis.
3. Pass that default board to a add cliffs function that adds a random amount of "impassable" cliffs to the board. 4. I have a getRandomPoint helper func set up to select a point on the board and build cliffs from there.

4. Continued:
   - Currently no way to run buildCliffs multiple times.
   - The area and maybe percentage chance of creating a cliff must depend on the board size.
   - I need to remove the limitation of not creating impassable terrain below row 5 or above row(height - 5)

## Test:

- 1. Init board is tested
- 2. Populate default board is tested
- 3. Select random point is tested
- 4. Print out board is tested

- 1. buildCliffs IS NOT TESTED.
