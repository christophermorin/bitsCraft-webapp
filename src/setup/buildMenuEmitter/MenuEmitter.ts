import { GameContext } from "../../../types/main";
import { mainMenu } from "../../gameLoop/mainMenu";
import { gameContext } from "../buildGameContext";
import { build } from "../../gameLoop/build";

export class MenuEmitter {
  public gameContext: GameContext;
  private subscribers: { [command: string]: Array<(context: GameContext) => void> } = {};
  
  constructor(gameContext: GameContext){
    this.gameContext = gameContext;
  }
  
  on(command: string, callback: () => void) {
    if (!this.subscribers[command]) {
      this.subscribers[command] = [];
    }
    this.subscribers[command].push(callback);
  };
  
  emit(command: string,) {
    const callbacks = this.subscribers[command];
    if (callbacks) {
      callbacks.forEach((callback) => callback(this.gameContext));
    }
    };
    
  }
  
  export const emitter = new MenuEmitter(gameContext);

  emitter.on("main menu", () => mainMenu(emitter.gameContext))
  emitter.on("1) Build Structure", () => build(emitter.gameContext.board))
