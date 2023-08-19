export class Player {
  static BEGINNER_LEVEL = 1;
  static ADVANCED_LEVEL = 2;
  static SUPER_LEVEL = 3;
  private level: number;

  constructor() {
    this.level = Player.BEGINNER_LEVEL;
    this.showLevelMessage();
  }

  getLevel() {
    return this.level;
  }

  upgraceLevel() {
    if (this.level == Player.BEGINNER_LEVEL) {
      this.level = Player.ADVANCED_LEVEL;
    } else if (this.level == Player.ADVANCED_LEVEL) {
      this.level = Player.SUPER_LEVEL;
    } else {
      console.log("not support level");
    }
    this.showLevelMessage();
  }

  play(count: number) {
    this.run();
    for (let i = 0; i < count; i++) {
      this.jump();
    }
    this.turn();
  }

  run() {
    if (this.level == Player.BEGINNER_LEVEL) {
      console.log("천천히 달립니다.");
    } else if (this.level == Player.ADVANCED_LEVEL) {
      console.log("빨리 달립니다.");
    } else if (this.level == Player.SUPER_LEVEL) {
      console.log("엄청 빨리 달립니다.");
    } else {
      console.log("not support level");
    }
  }

  jump() {
    if (this.level == Player.BEGINNER_LEVEL) {
      console.log("Jump 할 줄 모르지롱.");
    } else if (this.level == Player.ADVANCED_LEVEL) {
      console.log("높이 jump 합니다.");
    } else if (this.level == Player.SUPER_LEVEL) {
      console.log("엄청 높게 jump합니다.");
    } else {
      console.log("not support level");
    }
  }

  turn() {
    if (this.level == Player.BEGINNER_LEVEL) {
      console.log("Turn  할 줄 모르지롱.");
    } else if (this.level == Player.ADVANCED_LEVEL) {
      console.log("Turn 할 줄 모르지롱.");
    } else if (this.level == Player.SUPER_LEVEL) {
      console.log("한 바퀴 돕니다.");
    } else {
      console.log("not support level");
    }
  }

  showLevelMessage() {
    if (this.level == Player.BEGINNER_LEVEL) {
      console.log("***** 초보자 레벨 입니다. *****");
    } else if (this.level == Player.ADVANCED_LEVEL) {
      console.log("***** 중급자 레벨 입니다. *****");
    } else if (this.level == Player.SUPER_LEVEL) {
      console.log("***** 고급자 레벨 입니다. *****");
    } else {
      console.log("not support level");
    }
  }
}
