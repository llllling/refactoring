import { Customer } from "./Customer";

export class GoldCustomer extends Customer {
  //팩토리 메서드
  static create(customerName: string) {
    return new GoldCustomer(customerName);
  }

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
