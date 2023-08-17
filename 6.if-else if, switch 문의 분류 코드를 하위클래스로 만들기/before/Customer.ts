export class Customer {
  private bonusPoint = 0;

  static BRONZE_CUSTOMER = 0;
  static SILVER_CUSTOMER = 1;
  static GOLD_CUSTOMER = 2;

  constructor(private customerType: number, private customerName: string) {}

  getCustomerGrade() {
    switch (this.customerType) {
      case Customer.BRONZE_CUSTOMER:
        return "Bronze";
      case Customer.SILVER_CUSTOMER:
        return "Silver";
      case Customer.GOLD_CUSTOMER:
        return "Gold";
      default:
        return null;
    }
  }

  calcPrice(price: number) {
    switch (this.customerType) {
      case Customer.BRONZE_CUSTOMER:
        return price;
      case Customer.SILVER_CUSTOMER:
        return price - price * 0.05;
      case Customer.GOLD_CUSTOMER:
        return price - price * 0.1;
      default:
        return price;
    }
  }

  calcBonusPoint(price: number) {
    switch (this.customerType) {
      case Customer.BRONZE_CUSTOMER:
        return (this.bonusPoint += price * 0.01);
      case Customer.SILVER_CUSTOMER:
        return (this.bonusPoint += price * 0.05);
      case Customer.GOLD_CUSTOMER:
        return (this.bonusPoint += price * 0.1);
      default:
        return price;
    }
  }

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
