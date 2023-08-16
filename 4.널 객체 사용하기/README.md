# 널 객체 사용하기

- 객체의 null 여부를 확인하는 코드가 너무 많은 경우
- 아무것도 안하는 객체를 만들어 사용함으로써 null 확인 코드를 줄인다.
- 안 좋은 예시(java코드)

```
 public String toString() {

		String result = "[ Person : ";

		result += " name =";
		if(name == null) {
			result += "\"(none)\"";
		}
		else {
			result += name;
		}

		result += " mail =";
		if(mail == null) {
			result += "\"(none)\"";
		}
		else {
			result += mail;
		}

		result += " ]";

		return result;


	}

```

## 리펙토링 단계

- 널 객체 사용하기

1. 널 객체 클래스를 작성한다.

   - 기존 null을 확인하는 클래스의 하위 클래스로 작성
   - isNull() 메서드 작성 : 기존 클래스는 false를 널 클래스는 true를 반환한다.

2. null 치환하기

   - null 코드 부분을 isNull() 메서드로 치환한다

3. 널 객체 클래스를 재정의하여 조건 판단하기

   - isNulll() 메서드를 사용하는 제어문을 찾아서 다음과 같이 수정

   ```
     if(obj.isNull()){
     //null에 해야할 일  doing()
     }
     else{
      obj.doing();
     }
   ```

   널 클래스에 doing() 메서드를 오버라이딩하여 null에 해당하는 코드 작성
   => obj.doing();

## 예제 소스코드 리팩토링

1. 널 클래스 만들기

```
export class NullLabel extends Label {
  constructor() {
    super("(none)");
  }
}

```

2. isNull() 메서드 추가

   - Label.ts

     ```
     export class Label {
       constructor(private label: string) {}

       display() {
         console.log("display : " + this.label);
       }

       toString() {
         return this.label;
       }

       isNull() {
         return false;
       }
     }


     ```

   * NullLabel.ts

     ```
       export class NullLabel extends Label {
         constructor() {
           super("(none)");
         }

         override isNull() {
           return true;
         }
       }
     ```

3. null 치환

   - Person.ts

   ```
     display() {
       if (!this.name?.isNull()) {
         this.name!.display();
       }

       if (!this.mail?.isNull()) {
         this.mail!.display();
       }
     }

     toString() {
       let result = "[ Person: ";
       result += "name = ";
       if (this.name?.isNull()) {
         result += '"(none)"';
       } else {
         result += this.name;
       }

       result += " mail = ";
       if (this.mail?.isNull()) {
         result += '"(none)"';
       } else {
         result += this.mail;
       }

       result += " ]";

       return result;
     }
   ```

4. isNull() 메서드를 사용하는 조건 판단하기

- NullLabel.ts

  - display override

  ```
      export class NullLabel extends Label {
        constructor() {
          super("(none)");
        }

        override isNull() {
          return true;
        }

        override display(): void {}
      }
  ```

* Person.ts

```
   constructor(
    private name: Label | null = null,
    private mail: Label | null = null
  ) {
    if (name === null) {
      this.name = new NullLabel();
    }

    if (mail === null) {
      this.mail = new NullLabel();
    }
  }
```
