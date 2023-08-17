import { ItemType } from "./ItemType";

export class Item {
  // static TYPECODE_BOOK = ItemType.BOOK.getTypecode();
  // static TYPECODE_DVD = ItemType.DVD.getTypecode();
  // static TYPECODE_SOFTWARE = ItemType.SOFTWARE.getTypecode();

  constructor(
    private itemType: ItemType,
    private title: string,
    private price: number
  ) {}

  getTitle() {
    return this.title;
  }

  getPrice() {
    return this.price;
  }

  toString() {
    return `[${this.itemType.getTypeCode()}, ${this.title}, ${this.price}]`;
  }
}
