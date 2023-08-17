import { Item } from "./Item";

const book = new Item(Item.TYPECODE_BOOK, "Demian", 20000);
const dvd = new Item(Item.TYPECODE_DVD, "King", 50000);
const soft = new Item(Item.TYPECODE_SOFTWARE, "Window", 30000);

console.log(book.toString());
console.log(dvd.toString());
console.log(soft.toString());
