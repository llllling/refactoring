import { PlayerLevel } from "./PlayerLevel";

export class AdvancedLevel extends PlayerLevel {
  static instance = new AdvancedLevel();
  static getInstance() {
    return new AdvancedLevel();
  }
  override run(): void {
    console.log("빨리 달립니다.");
  }
  override jump(): void {
    console.log("높이 jump 합니다.");
  }
  override turn(): void {
    console.log("Turn 할 줄 모르지롱.");
  }
  override showLevelMessage(): void {
    console.log("***** 중급자 레벨 입니다. *****");
  }
}
