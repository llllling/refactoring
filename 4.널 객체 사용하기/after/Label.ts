export class Label {
  constructor(private label: string) {}

  display() {
    console.log("display : " + this.label);
  }

  toString() {
    return this.label;
  }

  isNull() {
    return false;
  }
}
