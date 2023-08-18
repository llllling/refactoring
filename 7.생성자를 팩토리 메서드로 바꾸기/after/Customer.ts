export abstract class Customer {
  protected bonusPoint = 0;

  constructor(private customerName: string) {}

  abstract getCustomerGrade(): string;
  abstract calcPrice(price: number): number;
  abstract calcBonusPoint(price: number): number;

  getCustomerName() {
    return this.customerName;
  }

  toString() {
    return (
      this.customerName +
      "님의 멤버십 등급은" +
      this.getCustomerGrade() +
      "입니다."
    );
  }
}
