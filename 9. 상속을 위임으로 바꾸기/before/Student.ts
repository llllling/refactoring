import { Subject } from "./Subject";

export class Student extends Subject {
  majorSubject: Subject;
  subjectList: Subject[] = [];
  constructor(
    public studentName: string,
    public studentId: string,
    subjectName: string,
    subjectCode: number
  ) {
    super();
    this.majorSubject = new Subject(subjectName, subjectCode);
  }

  addSubject(subjectName: string, subjectCode: number) {
    this.subjectList.push(new Subject(subjectName, subjectCode));
  }

  setSubjectScore(subjectCode: number, score: number) {
    for (let i = 0; i < this.subjectList.length; i++) {
      if (this.subjectList[i].getSubjectCode() === subjectCode) {
        this.subjectList[i].setScore(score);
        return;
      }
    }
    console.log("no subejct code error");
  }

  getReport() {
    let total = this.majorSubject.score;
    console.log(
      this.studentName +
        "님의 전공과목은 " +
        this.majorSubject.getSubjectName() +
        " 입니다"
    );
    console.log(
      this.majorSubject.getSubjectName() + " : " + this.majorSubject.getScore()
    );

    this.subjectList.forEach((subject) => {
      console.log(subject.getSubjectName() + " : " + subject.getScore());
      total += subject.getScore();
    });

    console.log("Total Score : " + total);
  }
}
