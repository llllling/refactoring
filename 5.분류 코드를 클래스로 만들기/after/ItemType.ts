export class ItemType {
  static BOOK = new ItemType(0);
  static DVD = new ItemType(1);
  static SOFTWARE = new ItemType(2);

  constructor(private typecode: number) {}

  getTypeCode() {
    return this.typecode;
  }
}
