class Student {
  constructor(sId, sName) {
    this.Roll = sId;
    this.Name = sName;
    this.SchoolName = "Hatipara High School";
  }
}

const student1 = new Student(1, "Imran Khan");
const student2 = new Student(2, "Sojib Khan");
const student3 = new Student(3, "Hello Imran Khan");
console.log(student1, student2, student3);
