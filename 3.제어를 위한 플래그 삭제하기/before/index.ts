import * as fs from "fs";
import { SimpleDataBase } from "./SimpleDataBase ";

async function init() {
  const fileStream = fs.createReadStream("../text.txt", "utf8");
  const simple = new SimpleDataBase();
  await simple.fileRead(fileStream);

  const ir = simple.iterator();
  ir.forEach((key) => {
    console.log("key : " + key);
    console.log("value : " + simple.getValue(key));
  });
}
init();
