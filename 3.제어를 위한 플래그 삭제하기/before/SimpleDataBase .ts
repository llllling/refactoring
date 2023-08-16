import * as fs from "fs";
import * as readline from "readline";

interface HashMap {
  [key: string]: any;
}

export class SimpleDataBase {
  private hashMap: HashMap = {};

  async fileRead(fileStream: fs.ReadStream) {
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity, // 줄바꿈 문자를 '\r\n'으로 인식
    });
    try {
      let tmp: string = "";
      for await (const line of rl) {
        tmp = line;
        let flag = true;
        let sb1: string[] = [];
        let sb2: string[] = [];

        for (let i = 0; i < tmp.length; i++) {
          const tmp2 = tmp[i];
          if (flag) {
            if (tmp2 == "=") {
              flag = false;
            } else {
              sb1.push(tmp2);
            }
          } else {
            sb2.push(tmp2);
          }
        }
        this.hashMap[sb1.join("")] = sb2.join("");
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
