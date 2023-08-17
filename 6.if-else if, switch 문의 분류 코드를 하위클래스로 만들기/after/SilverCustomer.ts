import { Customer } from "./Customer";

export class SilverCustomer extends Customer {
  getCustomerGrade(): string {
    return "Silver";
  }
  calcPrice(price: number): number {
    return price - price * 0.05;
  }
  calcBonusPoint(price: number): number {
    return (this.bonusPoint += price * 0.05);
  }
}
