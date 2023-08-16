import { Label } from "./Label";

export class NullLabel extends Label {
  constructor() {
    super("(none)");
  }

  override isNull() {
    return true;
  }

  override display(): void {}
}
