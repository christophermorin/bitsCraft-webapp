import { UserInterface } from "../../types/main";

export async function selectPoint(rl: UserInterface): Promise<{y: number, x: number}>{
  const yPos = await rl.question("Y position: ");
  const xPos = await rl.question("X position: ");

  return {y: Number(yPos.trim()), x: Number(xPos.trim())}
}