const COMMAND = {
  WALK: 0,
  STOP: 1,
  JUMP: 2
} as const;
type Command = (typeof COMMAND)[keyof typeof COMMAND];

export class Robot {
  command = COMMAND;
  constructor(private name: string) {}
  order(command: Command) {
    if (command === COMMAND.WALK) {
      console.log("walk");
    } else if (command === COMMAND.STOP) {
      console.log("stop");
    } else if (command === COMMAND.JUMP) {
      console.log("jump");
    } else {
      console.log("error");
    }
  }
}
