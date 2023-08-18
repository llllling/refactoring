import { Customer } from "./Customer";

const bronzeCustomer = new Customer(Customer.BRONZE_CUSTOMER, "Tomas");
const silverCustomer = new Customer(Customer.SILVER_CUSTOMER, "Alice");
const goldCustomer = new Customer(Customer.GOLD_CUSTOMER, "Edward");

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
