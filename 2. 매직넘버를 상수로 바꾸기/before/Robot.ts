export class Robot {
  constructor(private name: string) {}
  order(command: number) {
    if (command === 0) {
      console.log("walk");
    } else if (command === 1) {
      console.log("stop");
    } else if (command === 2) {
      console.log("jump");
    } else {
      console.log("error");
    }
  }
}
