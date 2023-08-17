# 분류 코드를 클래스로 만들기

- 기본 타입 분류 코드 : 객체의 종류를 특정 값으로 나타냄
  - BOOK:0, FOOD:1, CLOTHE:2 등등...

* 안좋은 예시(java 소스)

```
     public static final int BOOK = 0;
     public static final int FOOD = 1;
     public static final int CLOTHE = 2;
     new Catetegory(100);  //사용하지 않느 분류코드 값

```

## 리펙토링 단계

- 분류 코드를 클래스로 치환하기

1. 새로운 분류 코드 클래스를 작성하여 기존 코드에서 사용
2. 새로운 분류 코드 클래스에 새로운 메서드를 추가하고 이를 기존 코드에 적용
3. 기존 코드에서 사용하지 않는 메서드등은 삭제
