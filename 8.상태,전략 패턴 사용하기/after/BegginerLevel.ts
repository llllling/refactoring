import { PlayerLevel } from "./PlayerLevel";

export class BegginerLevel extends PlayerLevel {
  //레벨클래스이 여러가지 일을 하는 게 아닌 하나의 일만 하니까 싱글톤으로
  static instance = new BegginerLevel();
  static getInstance() {
    return new BegginerLevel();
  }
  override run(): void {
    console.log("천천히 달립니다.");
  }
  override jump(): void {
    console.log("Jump 할 줄 모르지롱.");
  }
  override turn(): void {
    console.log("Turn  할 줄 모르지롱.");
  }
  override showLevelMessage(): void {
    console.log("***** 초보자 레벨 입니다. *****");
  }
}
