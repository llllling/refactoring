export class Item {
  static TYPECODE_BOOK = 0;
  static TYPECODE_DVD = 1;
  static TYPECODE_SOFTWARE = 2;

  constructor(
    private typeCode: number,
    private title: string,
    private price: number
  ) {}

  getTypecode() {
    return this.typeCode;
  }

  getTitle() {
    return this.title;
  }

  getPrice() {
    return this.price;
  }

  toString() {
    return `[${this.typeCode}, ${this.title}, ${this.price}]`;
  }
}
