import { Label } from "./Label";

export class Person {
  constructor(
    private name: Label | null = null,
    private mail: Label | null = null
  ) {}
  display() {
    if (this.name != null) {
      this.name.display();
    }

    if (this.mail != null) {
      this.mail.display();
    }
  }

  toString() {
    let result = "[ Person: ";
    result += "name = ";
    if (this.name === null) {
      result += '"(none)"';
    } else {
      result += this.name;
    }

    result += " mail = ";
    if (this.mail === null) {
      result += '"(none)"';
    } else {
      result += this.mail;
    }

    result += " ]";

    return result;
  }
}
