import { Customer } from "./Customer";

export class BronzeCustomer extends Customer {
  //팩토리 메서드
  static create(customerName: string) {
    return new BronzeCustomer(customerName);
  }

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
