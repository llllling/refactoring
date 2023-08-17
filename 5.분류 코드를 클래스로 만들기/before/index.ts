import { Item } from "./Item";

const book = new Item(Item.TYPECODE_BOOK, "Demian", 20000);
const dvd = new Item(Item.TYPECODE_DVD, "King", 50000);
const soft = new Item(Item.TYPECODE_SOFTWARE, "Window", 30000);

console.log(book);
console.log(dvd);
console.log(soft);
