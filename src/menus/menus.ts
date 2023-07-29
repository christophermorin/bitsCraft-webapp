type Menu = {
  option: string;
}

export const main: Menu[] = [
  { option: "1) Build Structure" },
  { option: "2) Build Unit"},
  { option: "3) Unit Action" },
  { option: "4) End Turn" },
  { option: "0) Quit" },
]

export const selectTile: Menu[] = [
  {option: "1) Select Tile (y, x): "}
]

export const buildStructureMenu: Menu[] = [
  { option: "Capture Node" },
  { option: "Barracks" },
  { option: "Factory" },
  { option: "Defences" }
  // Calls select tile
      // Select registers build action
          // Checks if player has seen this tile and no one owns it and it is not a mountain or hq.
          // Check if worker drone in range of tile
  // Call build funtion
  // Display building options
      // Capture node
          // Scan if point is resource node
      // Barracks
      // Factory
      // Defences
  // Check if player has resources
      // Build strucuture
  // Return to main menu
      
  // End turn
]




export const unitActionMenu: Menu[] = [
  { option: "1) Move" },
  { option: "2) Attack (y ,x): "},

]
