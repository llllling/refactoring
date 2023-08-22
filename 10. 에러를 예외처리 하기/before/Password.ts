export class Password {
  private password: string = "";
  getPassword(): string {
    return this.password;
  }
  setPaswword(password: string | null): void {
    if (password == null) {
      console.log("비밀번호는 null일 수 없습니다.");
      return;
    } else if (password.length < 5) {
      console.log("비밀번호는 5자 이상이어야 합니다.");
      return;
    } else if (password.match(/[a-zA-Z]+/) === null) {
      console.log("비밀번호는 숫자나 특수문자를 포함해야 합니다.");
      return;
    } else {
      console.log("오류 없음");
    }

    this.password = password;
  }
}
