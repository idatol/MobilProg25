import type { Student } from './interfaces/Student';
import type { Subject, Grade } from './interfaces/Subject';

const students: Student[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  {
    id: 4,
    name: "David"
  },
  {
    id: 5,
    name: "Lina"
  }
]

const subjects: Subject[] = [
  {
    id: 1,
    name: "Mathematics",
    students: [1, 2],
    grades: ['A', 'B', 'C']
  },
  {
    id: 2,
    name: "English",
    students: [2],
    grades: []
  },
  {
    id: 3,
    name: "History",
    students: [1, 4, 5],
    grades: ['A', 'D', 'F']
  }
]

const addStudent = (student: Student) => {
  students.push(student);
}

const addSubject = (subject: Pick<Subject, "name">, students: number[], grades: Grade[] = []) =>{
  const subjectData: Subject = {
    id: subjects.length + 1,
    name: subject.name || `Subject ${subjects.length + 1}`,
    students,
    grades
  }
  subjects.push(subjectData);
} 

const getGradeDistribution = (subjects: Subject[]) => {
  const gradeNumbers = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
    F: 0
  }

  for (const subject of subjects) {
    for (const grade of subject.grades){
        gradeNumbers[grade]++;
    }
  }
  return (
    "Get Grade Distribution: " + Object.entries(gradeNumbers).map(
      ([grade, count]) => `${grade}: ${count}`
    ).join("")
  )
}

addStudent({id: 6, name: "Ida"})
addSubject({ name: "Phone-programing" }, [1, 3, 6], ['A', 'B', 'B'])


