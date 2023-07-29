import { GameContext } from '../../types/main';
import { printBoard } from '../utils/printBoard';
import { main } from '../menus/menus';
import { emitter } from '../setup/buildMenuEmitter/MenuEmitter';
import readline from 'readline';


let selectedIndex = 0;
let keyPressHandler: (c: any, k:any) => void;

let currentBuffer: string = "";
let nextBuffer: string = "";

function displayMenu() {
  console.log("------------------------------------------------------------")
  console.log('Menu:');
  main.forEach((option, index) => {
    if (index === selectedIndex) {
      process.stdout.write("  \x1b[34m" + "\x1b[1m" + `${option.option}` + "\x1b[0m");
    } else {
      process.stdout.write(`  ${option.option}`);
    }
  });
}

function handleUserInput(index: number){
  if (main[index]){
    process.stdin.removeListener('keypress', keyPressHandler);
    emitter.emit(main[index].option)
    return
  }
}

function handleKeyPress(key: any, context: GameContext ) {
  if (!key) return;
  
  if (key.name === 'left' && selectedIndex > 0) {
    selectedIndex--;
    updateAndRender(context)
  } else if (key.name === 'right' && selectedIndex < main.length - 1) {
    selectedIndex++;
    updateAndRender(context)
  } else if (key.name === 'return') {
    handleUserInput(selectedIndex);
  }
}

function updateAndRender(context: GameContext){
  nextBuffer = printBoard(context)

  console.clear()
  currentBuffer = nextBuffer

  process.stdout.write(currentBuffer)

  displayMenu();
}


export async function mainMenu(context: GameContext){
  currentBuffer = printBoard(context)
  keyPressHandler = (c: any, k: any) => handleKeyPress(k, context);
  process.stdin.on('keypress', keyPressHandler);
  process.stdin.setRawMode(true);
  readline.emitKeypressEvents(process.stdin);

  process.stdout.write(currentBuffer);
  displayMenu();
  return;
}
