export class Subject {
  score: number = 0;
  constructor(public subjectName?: string, public subjetCode?: number) {}
  getScore() {
    return this.score;
  }
  setScore(score: number) {
    this.score = score;
  }

  getSubjectName() {
    return this.subjectName;
  }
  getSubjectCode() {
    return this.subjetCode;
  }

  toString() {
    return this.subjetCode + " : " + this.subjectName;
  }
}
