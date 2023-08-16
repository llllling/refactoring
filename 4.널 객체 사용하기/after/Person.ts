import { Label } from "./Label";
import { NullLabel } from "./NullLabel";

export class Person {
  constructor(
    private name: Label | null = null,
    private mail: Label | null = null
  ) {
    if (name === null) {
      this.name = new NullLabel();
    }

    if (mail === null) {
      this.mail = new NullLabel();
    }
  }

  display() {
    if (!this.name?.isNull()) {
      this.name!.display();
    }

    if (!this.mail?.isNull()) {
      this.mail!.display();
    }
  }

  toString() {
    let result = "[ Person: ";
    result += "name = ";
    if (this.name?.isNull()) {
      result += '"(none)"';
    } else {
      result += this.name;
    }

    result += " mail = ";
    if (this.mail?.isNull()) {
      result += '"(none)"';
    } else {
      result += this.mail;
    }

    result += " ]";

    return result;
  }
}
