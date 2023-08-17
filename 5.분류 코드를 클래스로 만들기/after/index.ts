import { Item } from "./Item";
import { ItemType } from "./ItemType";

const book = new Item(ItemType.BOOK, "Demian", 20000);
const dvd = new Item(ItemType.DVD, "King", 50000);
const soft = new Item(ItemType.SOFTWARE, "Window", 30000);

console.log(book.toString());
console.log(dvd.toString());
console.log(soft.toString());
