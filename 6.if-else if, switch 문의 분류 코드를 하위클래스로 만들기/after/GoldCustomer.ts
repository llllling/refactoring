import { Customer } from "./Customer";

export class GoldCustomer extends Customer {
  getCustomerGrade(): string {
    return "Gold";
  }
  calcPrice(price: number): number {
    return price - price * 0.1;
  }
  calcBonusPoint(price: number): number {
    return (this.bonusPoint += price * 0.1);
  }
}
