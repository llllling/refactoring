import { BronzeCustomer } from "./BronzeCustomer";
import { GoldCustomer } from "./GoldCustomer";
import { SilverCustomer } from "./SilverCustomer";

const bronzeCustomer = new BronzeCustomer("Tomas");
const silverCustomer = new SilverCustomer("Alice");
const goldCustomer = new GoldCustomer("Edward");

const price = 10000;

console.log(bronzeCustomer.toString());
console.log(
  bronzeCustomer.getCustomerName() +
    ": price : " +
    bronzeCustomer.calcPrice(price) +
    ": point : " +
    bronzeCustomer.calcBonusPoint(price)
);
console.log(silverCustomer.toString());
console.log(
  silverCustomer.getCustomerName() +
    " : price : " +
    silverCustomer.calcPrice(price) +
    " : point : " +
    silverCustomer.calcBonusPoint(price)
);

console.log(goldCustomer.toString());
console.log(
  goldCustomer.getCustomerName() +
    " : price : " +
    goldCustomer.calcPrice(price) +
    ": pint : " +
    goldCustomer.calcBonusPoint(price)
);
