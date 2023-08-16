import { Label } from "./Label";
import { Person } from "./Person";
const people = [
  new Person(new Label("Alice"), new Label("alice@aaa.com")),
  new Person(new Label("James"), new Label("james@aaa.com")),
  new Person(new Label("Tomas"))
];

people.forEach((p) => {
  console.log(p.toString());
  p.display();
  console.log("");
});
