import { Customer } from "./Customer";

export class BronzeCustomer extends Customer {
  getCustomerGrade(): string {
    return "Bronze";
  }
  calcPrice(price: number): number {
    return price;
  }
  calcBonusPoint(price: number): number {
    return (this.bonusPoint += price * 0.01);
  }
}
