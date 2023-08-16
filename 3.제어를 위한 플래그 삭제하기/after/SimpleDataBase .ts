import * as fs from "fs";
import * as readline from "readline";

interface HashMap {
  [key: string]: any;
}
//1. 이상한 변수명부터 바꾸기
// 2. 라이브러리 활용
export class SimpleDataBase {
  private hashMap: HashMap = {};

  async fileRead(fileStream: fs.ReadStream) {
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity, // 줄바꿈 문자를 '\r\n'으로 인식
    });
    try {
      let line: string = "";
      for await (const textLine of rl) {
        line = textLine;
        // let scanningKey = true;
        // let keyBuffer: string[] = [];
        // let valueBuffer: string[] = [];

        // for (let i = 0; i < line.length; i++) {
        //   const c = line[i];
        //   if (scanningKey) {
        //     if (c == "=") {
        //       scanningKey = false;
        //     } else {
        //       keyBuffer.push(c);
        //     }
        //   } else {
        //     valueBuffer.push(c);
        //   }
        // }
        const index = line.indexOf("=");
        if (index > 0) {
          const key = line.substring(0, index);
          const value = line.substring(index + 1);
          this.hashMap[key] = value;
        }
      }
    } catch (e) {
      console.error(e);
    }
  }

  iterator() {
    return Object.keys(this.hashMap);
  }

  getValue(key: string) {
    return this.hashMap[key];
  }

  toString() {
    return this.hashMap.toString();
  }
}
