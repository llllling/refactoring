import { BegginerLevel } from "./BegginerLevel";
import { PlayerLevel } from "./PlayerLevel";

export class Player {
  private level: PlayerLevel;

  constructor() {
    this.level = new BegginerLevel();
    this.level.showLevelMessage();
  }

  getLevel() {
    return this.level;
  }

  upgraceLevel(level: PlayerLevel) {
    this.level = level;
    level.showLevelMessage();
  }

  play(count: number) {
    this.level.go(count);
  }
}
