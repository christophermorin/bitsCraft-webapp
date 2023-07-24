// Create a basic 10x10 map of default terrain. Ie = "#"

type PointArray = string[][];

type Point = {
  x: number,
  y: number,
};

const dir = [
  [-1, -1],
  [-1, 0],
  [-1, +1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1]
]



function walk(map: PointArray, openTerrain: string, curr: Point, areaToScan: number, seen: boolean[][] ): PointArray{
  // if (!map[curr.x][curr.y]){
  //   return map
  // }
  if(curr.x < 0 || curr.x >= map.length || curr.y < 0 || curr.y >= map[0].length){
    return map;
  }
  if (curr.x < 5 || curr.x > (map.length - 5)){
    return map
  }
  
  if (seen[curr.x][curr.y]){
    return map
  }
  
  if (map[curr.x][curr.y] !== openTerrain){
    return map
  }
  
  //pre
    seen[curr.x][curr.y] = true;
    const chanceToChangeTerrain = Math.floor(Math.random() * 10);
    if (chanceToChangeTerrain >= 6){
      map[curr.x][curr.y] = " X ";
    }
    for (let i = 0; i < areaToScan; i++){
      for (let j = 0; j < dir.length; j++){
        const [x, y] = dir[j];
        walk(map, openTerrain, {x: curr.x + x, y: curr.y + y}, areaToScan - 1 , seen)

      }
      }
    
  // recurse

  //post
    return map
}

function changeRandomPoint(map: PointArray, h: number, w: number): void{
  let heightPos: number = 0;
  let widthPos: number = 0;
  
  while (heightPos < 5 || heightPos > (h - 5)){
    heightPos = Math.floor(Math.random() * h);
    widthPos = Math.floor(Math.random() * w);
  }

  const pointToScanFrom = {
    x: heightPos,
    y: widthPos
  }

  const area = Math.floor(Math.random() * 3);

  const seen = Array.from({ length: h }, () => Array<boolean>(w).fill(false));

  // I have a random point. I need to from here scan the surrounding points to a certain depth
  // If the surrounding point meets the while condition above. Don't change it.
  // Else change it to adverse terrain
    const newMap = walk(map, " . ", pointToScanFrom, area, seen )
  // newMap[heightPos][widthPos] = " X ";
  printMap(newMap)
  return;
}

function createDefaultTerrainAndLabels(h: number, w: number): PointArray{
   const board = Array.from({ length: h }, () => Array<string>(w).fill(' . '));

   for (let i = 0; i < h; i++){
    if (i > 9){
      board[i][0] = `${i} `;
    }
    else {
      board[i][0] = ` ${i} `;
    }
   }

   for (let i = 0; i < w; i++){
    if (i > 9){
      board[0][i] = `${i} `;
    }
    else {
      board[0][i] = ` ${i} `
    }
   }

   return board;
}



function printMap(map: PointArray): void{
  for (let i = 0; i < map.length; i++){
    console.log(map[i].join(''));
  }
}

const newMap = createDefaultTerrainAndLabels(20, 40)
changeRandomPoint(newMap, 20, 40)